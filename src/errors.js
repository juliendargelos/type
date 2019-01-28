import Error from '~/error'

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

  toString() {
    return this.join("\n")
  }
}

export default Errors
