import Type from '~/type'

/**
 * Represents an object type.
 * @class Object
 * @memberof Type
 * @extends Type
 * @inheritparams
 */
class ObjectType extends Type {
  constructor(structure = null, options = {}) {
    super(options)
    if(structure !== null) this.structure = structure
  }

  static primitives = ['object']

  static tests = {
    structure: ({value, errors, type: {structure}}) => {
      Object.entries(structure).some(([attribute, type]) => type
        .validate(value[attribute])
        .annotate('attribute', attribute)
        .delegate(errors)
        .failed
      )

      if(errors.delegated) errors.prepend('structure is invalid')
    }
  }
}

export default ObjectType
