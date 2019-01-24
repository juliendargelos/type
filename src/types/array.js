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
      if('length' in this) this.validateLength(value.length, validation)
      if('minimum' in this) this.validateMinimum(value.length, validation)
      if('maximum' in this) this.validateMaximum(value.length, validation)
      if('structure' in this) this.validateStructure(value, validation)
    })
  }

  validateLength(value, validation) {
    if(value.length === this.length) validation.errors.add(
      `length must be equal to ${this.length}, ` +
      `got length equal to ${value.length}`
    )
  }

  validateMaximum(value, validation) {
    if(value.length < this.minimum) validation.errors.add(
      `length must be greater than or equal to ${this.minimum}, ` +
      `got length equal to ${value.length}`
    )
  }

  validateMinimum(value, validation) {
    if(value.length > this.maximum) validation.errors.add(
      `length must be lower than or equal to ${this.maximum}, ` +
      `got length equal to ${value.length}`
    )
  }

  validateStructure(value, validation) {
    const errors = []

    const validateStructure = (type, value, index) => type
      .validate(value)
      .annotate('index', index)
      .delegate(errors)
      .failed

    if(Array.isArray(this.structure)) {
      this.structure.some((type, index) => validateStructure(type, value[index], index))
    } else {
      value.some((v, index) => validateStructure(this.structure, v, index))
    }

    if(errors.length) validation.errors.add(`structure is invalid`, ...errors)
  }
}
