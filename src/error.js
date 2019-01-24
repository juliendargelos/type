export default class Error {
  constructor(validation, message) {
    this.validation = validation
    this.message = message
  }

  exception(file, line, column) {
    const error = new TypeError(`${this}\n${file}:${line}:${column}`, file, line)

    if(TypeError.captureStackTrace) {
      TypeError.captureStackTrace(error, TypeError)
    }
    
    return error
  }

  toString() {
    return `${this.validation}: ${this.message}.`
  }
}
