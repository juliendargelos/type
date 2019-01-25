import Type from '~/type'
import Errors from '~/errors'

export default class Validation {
  constructor(type = new Type(), value = null) {
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

  get state() {
    return this.succeed ? 'Valid' : 'Invalid'
  }

  toString() {
    var annotations = this.annotations.map(([k, v]) => `${k}: ${v}`).join(', ')
    if(annotations) annotations = `[${annotations}] `
    return `${annotations}${this.state} ${this.type} value ${Type.stringify(this.value)}`
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
    if(this.failed) throw this.errors.exception
  }

  delegate(errors) {
    this.errors.delegate(errors)
    return this
  }
}
