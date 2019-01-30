import Errors from '~/errors'
import { stringify } from '~/utils'

/**
 * Creates a new Validation.
 * @class Validation
 * @param {Type?} [type=null] The validation type.
 * @param {*?} [value=null] The validation value.
 */
class Validation {
  constructor(type = null, value = null) {
    this.annotations = []

    /**
     * The type performing the validation
     * @type Type?
     */
    this.type = type

    /**
     * The value being validated.
     * @type *?
     */
    this.value = value

    /**
     * Validation errors.
     * @type Errors
     */
    this.errors = new Errors(this)

    /**
     * Equal to `true` if {@link Validation#cancel} has been called at least one time, `false` otherwise.
     * @type boolean
     */
    this.canceled = false
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
   * Equal to `'Valid'` if validation {@linkplain Validation#succeed succeed}, `'Invalid'` if it {@linkplain Validation#failed failed}.
   * @type string
   * @readonly
   */
  get state() {
    return this.succeed ? 'Valid' : 'Invalid'
  }

  /**
   * Returns the string representation of validation.
   * @return {string} String representation of validation.
   */
  toString() {
    const type = this.type ? `${this.type} ` : ''
    const annotations = this.annotations.length
      ? `[${this.annotations.map(([k, v]) => `${k}: ${v}`).join(', ')}] `
      : ''
    return `${annotations}${this.state} ${type}value ${stringify(this.value)}`
  }

  /**
   * Annotates the validation. The annotation will appear in the string returned by {@link Validation#toString}.
   * @param {string} key The key of the annotation.
   * @param {string} value The value of the annotation.
   * @return {Validation} `this`
   */
  annotate(key, value) {
    this.annotations.push([key, value])
    return this
  }

  /**
   * Continues the validation performing a test from {@link Type.tests}.
   * @param {string} name Name of the test (used as a key for {@link Type.tests}).
   * @return {Validation} `this`
   */
  test(name) {
    if(this.type) this.continue(this.type.constructor.tests[name])
    return this
  }

  /**
   * @callback callback
   * @memberof Validation
   * @param {Validation} validation The validation begin continued.
   * @param {...*} parameters Extra parameters.
   */

  /**
   * Continues the validation.
   * @param {Validation.callback} callback Will be called unless validation {@linkplain Validation#failed failed} or has been {@linkplain Validation#canceled canceled}.
   * @param {...*} parameters Extra parameters to provide when calling `callback`.
   * @return {Validation} `this`
   */
  continue(callback, ...parameters) {
    if(!this.canceled && !this.failed) callback.call(this, this, ...parameters)
    return this
  }

  /**
   * Cancels the validation, {@link Validation#continue} and {@link Validation#test} will not have any effect after that.
   * @param {Validation.callback} callback Will be called unless one of {@link Validation#canceled} and {@link Validation#failed} is `true`.
   * @param {...*} parameters Extra parameters to provide when calling `callback`.
   * @return {Validation} `this`
   */
  cancel() {
    this.canceled = true
    return this
  }

  /**
   * Throws error if validation {@linkplain Validation#failed failed}.
   * @throws {TypeError} Message equal to {@link Errors#toString}.
   */
  throw() {
    if(this.failed) throw this.errors.exception
  }
  
  /**
   * Add all validation errors to the given {@link Errors} or Array.
   * @param {Errors|Array} errors The {@link Errors} or Array to feed with errors.
   * @return {Validation} `this`
   */
  delegate(errors) {
    this.errors.delegate(errors)
    return this
  }
}

export default Validation
