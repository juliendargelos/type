import Type from '~/type'

/**
 * Represents an array type.
 * @class Array
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {(Type[]|Type)?} [structure=null] The structure an array must have to be valid. If a {@link Type} is given, all array values must be valid for the given type. If a `Array.<{@link Type}>` is given, each value of the array must be valid for the given type at the same index. Overflow values are ignored.
 * @param {number?} [options.length=null] If provided, the type will only validate arrays with a length equal to the given value.
 * @param {number?} [options.minimum=null] If provided, the type will only validate arrays with a length greater than or equal to the given value.
 * @param {number?} [options.maximum=null] If provided, the type will only validate arrays with a length lower than or equal to the given value.
 */
class ArrayType extends Type {
  constructor(structure = null, {
    length = null,
    minimum = null,
    maximum = null,
    ...options
  } = {}) {
    super(options)
    if(structure !== null) this.structure = structure
    if(length !== null) this.length = length
    if(minimum !== null) this.minimum = minimum
    if(maximum !== null) this.maximum = maximum
  }

  static primitives = ['array']

  static tests = {
    length: ({value, errors, type: {length}}) => value.length !== length && errors.add(
      `length must be equal to ${length}, ` +
      `got length equal to ${value.length}`
    ),

    minimum: ({value, errors, type: {minimum}}) => value.length < minimum && errors.add(
      `length must be greater than or equal to ${minimum}, ` +
      `got length equal to ${value.length}`
    ),

    maximum: ({value, errors, type: {maximum}}) => value.length > maximum && errors.add(
      `length must be lower than or equal to ${maximum}, ` +
      `got length equal to ${value.length}`
    ),

    structure: (validation) => {
      const structure = validation.type.structure
      validation.test(`structure${Array.isArray(structure) ? 'Array' : 'Type'}`)
      if(validation.errors.delegated) validation.errors.prepend('structure is invalid')
    },

    structureArray: ({value, errors, type: {structure}}) => {
      structure.some((type, index) => type
        .validate(value[index])
        .annotate('index', index)
        .delegate(errors)
        .failed
      )
    },

    structureType: ({value, errors, type: {structure}}) => {
      value.some((v, index) => structure
        .validate(v)
        .annotate('index', index)
        .delegate(errors)
        .failed
      )
    }
  }
}

export default ArrayType
