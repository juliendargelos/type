import Error from '~/error'

export default class Errors extends Array {
  constructor(validation) {
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
    const initial = this.length === 0
    if(initial) this.push(null)
    messages.forEach(message => this.push(message instanceof Error
      ? message
      : new Error(this.validation, message)
    ))
    if(initial) this.shift()
    return this
  }

  exception(...args) {
    return Error.prototype.exception.call(this, ...args)
  }

  toString() {
    return this.join("\n")
  }
}
