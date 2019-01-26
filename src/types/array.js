import Type from '~/type'
import Comparable from '~/helpers/comparable'

export default class ArrayType extends Type {
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
      Comparable.message('equal to', length, {value, subject: 'length'})
    ),

    minimum: ({value, errors, type: {minimum}}) => value.length < minimum && errors.add(
      Comparable.message('greater than', minimum, {value, subject: 'length'})
    ),

    maximum: ({value, errors, type: {maximum}}) => value.length > maximum && errors.add(
      Comparable.message('lower than', maximum, {value, subject: 'length'})
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
