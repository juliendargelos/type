import Error from '~/error'

/**
 * Creates an array of {@link Error}.
 * @class Errors
 * @extends Array
 * @param {Validation} [validation] The validation corresponding to errors.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array}
 */
class Errors extends Array {
  constructor(validation = null) {
    super()
    this.validation = validation
  }

  get empty() {
    return !this.length
  }

  get any() {
    return !!this.length
  }

  add(...messages) {
    messages.forEach(message => this.push(Error.for(message, this.validation)))
    return this
  }

  prepend(...messages) {
    messages.forEach(message => this.splice(0, 0, Error.for(message, this.validation)))
    return this
  }

  get exception() {
    return Error.exception(this)
  }

  delegate(errors) {
    if(this.length) {
      errors.delegated = true
      errors.push(...this)
    }
    return this
  }

  /**
   * Returns the string representation of errors.
   * @return {string} String representation of errors.
   */
  toString() {
    return this.join("\n")
  }
}

export default Errors
