import Type from '~/type'

export default class NumberType extends Type {
  constructor({
    infinity = false,
    integer = false,
    minimum = null,
    maximum = null,
    exclude = false,
    excludeMinimum = false,
    excludeMaximum = false,
    ...options
  } = {}) {
    super(options)

    if(infinity) this.infinity = true
    if(integer) this.integer = true

    if(minimum !== null) {
      this.minimum = minimum
      if(exclude) this.exclude = true
      else if(this.excludeMinimum) this.excludeMinimum = true
    }

    if(maximum !== null) {
      this.maximum = maximum
      if(exclude) this.exclude = true
      else if(this.excludeMinimum) this.excludeMinimum = true
    }
  }

  static primitives = ['number']

  validate(value) {
    return super.validate(value).continue(validation => {
      if(!this.infinity && (value === Infinity || value === -Infinity)) {
        validation.errors.add('must be finite')
      }

      if(this.integer && Math.floor(value) !== value) {
        validation.errors.add('must be an integer')
      }

      if('minimum' in this && value <= this.minimum) {
        const exclude = this.exclude || this.excludeMinimum
        if(exclude || value !== this.minimum) {
          return validation.errors.add(
            `must be greater than${exclude ?  '' : ' or equal to'} ${this.minimum}`
          )
        }
      }

      if('maximum' in this && value >= this.maximum) {
        const exclude = this.exclude || this.excludeMaximum
        if(exclude || value !== this.maximum) {
          return validation.errors.add(
            `must be lower than${exclude ?  '' : ' or equal to'} ${this.maximum}`
          )
        }
      }
    })
  }
}
