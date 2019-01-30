import Type from '~/type'

/**
 * Represents a number type.
 * @class Number
 * @extends Type
 * @inheritparams
 * @param {boolean} [options.integer=false] If set to `true`, the type will only validate integers.
 * @param {boolean|object} [options.exclude=false] If set to `true`, the type will not validate numbers equal to `minimum` or `maximum`. An object can be passed to separatly specify exlusion for `minimum` and `maximum`:
 * @param {boolean} [options.exclude.minimum=false] If set to `true`, the type will not validate numbers equal to `minimum`.
 * @param {boolean} [options.exclude.maximum=false] If set to `true`, the type will not validate numbers equal to `maximum`.
 * @param {boolean?} [options.finite=null] If set to `true`, the type will validate any number except `Infinity` and `-Infinity`, if set to `false`, the type will only validate `Infinity` and `-Infinity`.
 * @param {number?} [options.minimum=null] If a value is given, the type will only validate numbers that are greater than (or, depending on `exclude`, equal to) the given value.
 * @param {number?} [options.maximum=null] If a value is given, the type will only validate numbers that are lower than (or, depending on `exclude`, equal to) the given value.
 */
class NumberType extends Type {
  constructor({
    integer = false,
    exclude = false,
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

    minimum: ({value, errors, type: {minimum, excludeMinimum}}) => {
      if(value < minimum || value === minimum && excludeMinimum) errors.add(
        `must be greater than${excludeMinimum ? '' : ' or equal to'}${minimum}`
      )
    },

    maximum: ({value, errors, type: {maximum, excludeMaximum}}) => {
      if(value > maximum || value === maximum && excludeMaximum) errors.add(
        `must be lower than${excludeMaximum ? '' : ' or equal to'} ${maximum}`
      )
    }
  }

  get excludeMinimum() {
    return (
      this.exclude === true ||
      (this.exclude && this.exclude.minimum)
    )
  }

  get excludeMaximum() {
    return (
      this.exclude === true ||
      (this.exclude && this.exclude.maximum)
    )
  }
}

export default NumberType
