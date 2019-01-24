import Type from '~/type'

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

  validate(value) {
    return super.validate(value).continue(validation => {
      if('length' in this && value.length !== this.length) {
        return validation.errors.add(
          `length must be equal to ${this.length}, got length equal to ${value.length}`
        )
      }

      if('minimum' in this && value.length < this.minimum) {
        return validation.errors.add(
          `length must be greater than or equal to ${this.minimum}, got length equal to ${value.length}`
        )
      }

      if('maximum' in this && value.length > this.maximum) {
        return validation.errors.add(
          `length must be lower than or equal to ${this.maximum}, got length equal to ${value.length}`
        )
      }

      if('structure' in this) {
        const errors = []
        var failed

        if(Array.isArray(this.structure)) {
          failed = this.structure.some((structureType, index) => structureType
            .validate(value[index])
            .annotate('index', index)
            .delegate(errors)
            .failed
          )

          if(failed) {
            return validation.errors.add(
              `structure is invalid`,
              ...errors
            )
          }
        } else {
          failed = value.some((v, index) => this.structure
            .validate(v)
            .annotate('index', index)
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
      }
    })
  }
}
