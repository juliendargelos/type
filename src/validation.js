import Type from '~/type'
import Errors from '~/errors'

/**
 * Creates a new Validation.
 * @class Validation
 * @param {Type} type The validation type.
 * @param {*} value The validation value.
 */
class Validation {
  constructor(type = new Type(), value = null) {
    this.type = type
    this.value = value

    /**
     * Validation errors.
     * @type Errors
     */
    this.errors = new Errors(this)
    this.annotations = []
    this.canceled = false
    this.delegated = false
  }

  /**
   * Equal to `true` if the validation has no error, `false` otherwise.
   * @type boolean
   * @readonly
   */
  get succeed() {
    return this.errors.empty
  }

  /**
   * Equal to `true` if the validation has any error, `false` otherwise.
   * @type boolean
   * @readonly
   */
  get failed() {
    return this.errors.any
  }

  /**
   * Equal to `'Valid'` if {@link Validation#succeed} is `true`, `'Invalid'` otherwise.
   * @type string
   * @readonly
   */
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

export default Validation
