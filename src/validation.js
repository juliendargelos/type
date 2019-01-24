import Errors from '~/errors'

export default class Validation {
  constructor(type, value, line) {
    this.type = type
    this.value = value
    this.errors = new Errors(this)
    this.annotations = []
    this.canceled = false
  }

  get succeed() {
    return this.errors.empty
  }

  get failed() {
    return this.errors.any
  }

  toString() {
    var annotations = this.annotations.map(({key, value}) => `${key}: ${value}`).join(', ')
    if(annotations) annotations = `[${annotations}] `
    const value = typeof this.value === 'object' ? JSON.stringify(this.value) : this.value
    return `${annotations}${this.succeed ? 'Valid' : 'Invalid'} ${this.type} value ${value}`
  }

  annotate(key, value) {
    this.annotations.push({key, value})
    return this
  }

  continue(callback) {
    if(!this.canceled && !this.failed) callback.call(this, this)
    return this
  }

  cancel() {
    this.canceled = true
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
    errors.push(...this.errors)
    return this
  }
}
