export default class Error {
  constructor(message, validation = null) {
    this.message = message
    this.validation = validation
  }

  static for(message, validation = null) {
    return message instanceof this ? message : new this(message, validation)
  }

  exception(file, line, column) {
    const error = new TypeError(`${this}\n${file}:${line}:${column}`, file, line)
    if(TypeError.captureStackTrace) TypeError.captureStackTrace(error, TypeError)
    return error
  }

  toString() {
    return `${this.validation ? `${this.validation}: ` : ''}${this.message}.`
  }
}
