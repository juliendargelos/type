import Errors from '~/errors'

export default class Validation {
  constructor(type, value) {
    this.type = type
    this.value = value
    this.errors = new Errors(this)
    this.annotations = []
    this.canceled = false
    this.delegated = false
  }

  get succeed() {
    return this.errors.empty
  }

  get failed() {
    return this.errors.any
  }

  toString() {
    var annotations = this.annotations.map(([k, v]) => `${k}: ${v}`).join(', ')
    if(annotations) annotations = `[${annotations}] `
    const value = typeof this.value === 'object' ? JSON.stringify(this.value) : this.value
    return `${annotations}${this.succeed ? 'V' : 'Inv'}alid ${this.type} value ${value}`
  }

  annotate(key, value) {
    this.annotations.push([key, value])
    return this
  }

  test(name, ...parameters) {
    this.continue(this.type.constructor.tests[name], ...parameters)
    return this
  }

  continue(callback, ...parameters) {
    if(!this.canceled && !this.failed) callback.call(this, this, ...parameters)
    return this
  }

  cancel() {
    this.canceled = true
    return this
  }

  throw() {
    const [file, line, column] = new Error().stack
      .split("\n")[2]
      .split('(')[1]
      .split(')')[0]
      .split(':')

    if(this.failed) throw this.errors.exception(file, line, column)
  }

  delegate(errors) {
    this.errors.delegate(errors)
    return this
  }
}
