class Error {
  constructor(message, validation = null) {
    this.message = message
    this.validation = validation
  }

  static for(message, validation = null) {
    return message instanceof this ? message : new this(message, validation)
  }

  static exception(subject) {
    const error = new TypeError(`${subject}`)
    if(TypeError.captureStackTrace) TypeError.captureStackTrace(error, TypeError)
    return error
  }

  get exception() {
    return this.constructor.exception(this)
  }

  toString() {
    return `${this.validation ? `${this.validation}: ` : ''}${this.message}.`
  }
}

export default Error
