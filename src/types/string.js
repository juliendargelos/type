import Type from '~/type'

export default class StringType extends Type {
  constructor({
    length = null,
    minimum = null,
    maximum = null,
    only = null,
    except = null,
    pattern = null,
    ...options
  } = {}) {
    super(options)
    if(length !== null) this.length = length
    if(minimum !== null) this.minimum = minimum
    if(maximum !== null) this.maximum = maximum
    if(only !== null) this.only = only
    if(except !== null) this.except = except
    if(pattern !== null) this.pattern = pattern
  }

  static primitives = ['string']

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

      if('only' in this && value.split('').some(char => !this.only.includes(char))) {
        return validation.errors.add(`must only contain ${this.only}`)
      }

      if('except' in this && value.split('').some(char => this.except.includes(char))) {
        return validation.errors.add(`must not contain ${this.except}`)
      }

      if('pattern' in this && !value.match(this.pattern)) {
        return validation.errors.add(`must match pattern ${this.pattern}`)
      }
    })
  }
}
