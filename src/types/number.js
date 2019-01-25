import Type from '~/type'

export default class NumberType extends Type {
  constructor({
    integer = false,
    exclude = null,
    finite = null,
    minimum = null,
    maximum = null,
    ...options
  } = {}) {
    super(options)
    if(integer) this.integer = true
    if(exclude !== null) this.exclude = exclude
    if(finite !== null) this.finite = !!finite
    if(minimum !== null) this.minimum = minimum
    if(maximum !== null) this.maximum = maximum
  }

  static primitives = ['number']

  static tests = {
    integer: ({value, errors}) => {
      if(Math.floor(value) !== value) errors.add('must be an integer')
    },

    finite: ({value, errors, type: {finite}}) => {
      if(finite !== (value !== Infinity && value !== -Infinity)) errors.add(
        `must be ${finite ? '' : 'in'}finite`
      )
    },

    minimum: ({value, errors, type: {minimum, excludeMinimum}}) => {
      if(value < minimum && (excludeMinimum || value !== minimum)) errors.add(
        `must be greater than${excludeMinimum ? '' : ' or equal to'}${minimum}`
      )
    },

    maximum: ({value, errors, type: {maximum, excludeMaximum}}) => {
      if(value > maximum && (excludeMaximum || value !== maximum)) errors.add(
        `must be lower than${excludeMaximum ? '' : ' or equal to'} ${maximum}`
      )
    }
  }

  get excludeMinimum() {
    return (
      this.exclude === true ||
      typeof this.exclude === 'object' && this.exclude.minimum
    )
  }

  get excludeMaximum() {
    return (
      this.exclude === true ||
      typeof this.exclude === 'object' && this.exclude.maximum
    )
  }
}
