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

  static lengthMessage = (length, target, comparison = null) => (
    `length must be ${comparison ? `${comparison} than or` : ''} equal to ${target}, ` +
    `got length equal to ${length}`
  )

  static tests = {
    length: ({value, errors, type: {length, constructor: {lengthMessage}}}) => {
      if(value.length !== length) {
        errors.add(lengthMessage(value.length, length)
      }
    },

    minimum: ({value, errors, type: {minimum, constructor: {lengthMessage}}}) => {
      if(value.length < minimum) {
        errors.add(lengthMessage(value.length, minimum, 'greater')
      }
    },

    maximum: ({value, errors, type: {maximum, constructor: {lengthMessage}}}) => {
      if(value.length > maximum) {
        errors.add(lengthMessage(value.length, maximum, 'lower')
      }
    },

    only: ({value, errors, type: {only}}) => {
      if(value.split('').some(char => !only.includes(char))) {
        errors.add(`must only contain ${only}`)
      }
    },

    except: ({value, errors, type: {except}}) => {
      if(value.split('').some(char => except.includes(char))) {
        errors.add(`must not contain ${except}`)
      }
    },

    pattern: ({value, errors, type: {pattern}}) => {
      if(!value.match(pattern)) errors.add(`must match pattern ${pattern}`)
    }
  }
}
