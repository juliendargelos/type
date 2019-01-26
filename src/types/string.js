import Type from '~/type'
import Comparable from '~/helpers/comparable'

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

  static tests = {
    length: ({value, errors, type: {length}}) => value.length !== length && errors.add(
      Comparable.message('equal to', length, {value, subject: 'length'})
    ),

    minimum: ({value, errors, type: {minimum}}) => value.length < minimum && errors.add(
      Comparable.message('greater than', minimum, {value, subject: 'length'})
    ),

    maximum: ({value, errors, type: {maximum}}) => value.length > maximum && errors.add(
      Comparable.message('lower than', maximum, {value, subject: 'length'})
    ),

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
