import Type from '~/type'

export default class ObjectType extends Type {
  constructor(structure = null, options = {}) {
    super(options)
    if(structure !== null) this.structure = structure
  }

  static primitives = ['object']

  validate(value) {
    return super.validate(value).continue(validation => {
      if('structure' in this) {
        const structure = Object.entries(this.structure)
        const errors = []
        const failed = structure.some(([attribute, structureType]) => structureType
          .validate(value[attribute])
          .annotate('attribute', attribute)
          .delegate(errors)
          .failed
        )

        if(failed) {
          return validation.errors.add(
            `structure is invalid`,
            ...errors
          )
        }
      }
    })
  }
}
