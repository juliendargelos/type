import Type from '~/type'
import Comparable from '~/helpers/comparable'

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
      if(value < minimum || value === minimum && excludeMinimum) errors.add(
        Comparable.message('greater than', minimum, {value, exclude: excludeMinimum})
      )
    },

    maximum: ({value, errors, type: {maximum, excludeMaximum}}) => {
      if(value > maximum || value === maximum && excludeMaximum) errors.add(
        Comparable.message('lower than', maximum, {value, exclude: excludeMaximum})
      )
    }
  }

  get excludeMinimum() {
    return Comparable.exclude(this.exclude, 'minimum')
  }

  get excludeMaximum() {
    return Comparable.exclude(this.exclude, 'maximum')
  }
}
