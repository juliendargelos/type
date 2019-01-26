import Type from '~/type'
import Comparison from '~/helpers/comparison'

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
    if(exclude) this.exclude = exclude
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

    minimum: ({value, errors, type: {minimum, minimumExcluded}}) => {
      if(value < minimum || value === minimum && minimumExcluded) errors.add(
        Comparison.message({
          value,
          target: minimum,
          equal: !minimumExcluded,
          compare: 'greater'
        })
      )
    },

    maximum: ({value, errors, type: {maximum, maximumExcluded}}) => {
      if(value > maximum || value === maximum && maximumExcluded) errors.add(
        Comparison.message({
          value,
          target: maximum,
          equal: !maximumExcluded,
          compare: 'lower'
        })
      )
    }
  }

  excluded(boundary) {
    return (
      this.exclude === true ||
      typeof this.exclude === 'object' && this.exclude[boundary]
    )
  }

  get minimumExcluded() {
    return this.excluded('minimum')
  }

  get maximumExcluded() {
    return this.excluded('maximum')
  }
}
