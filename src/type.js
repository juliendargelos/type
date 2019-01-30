import Validation from '~/validation'
import Generator from '~/generator'
import * as utils from '~/utils'

/**
 * Base type class.
 * @class Type
 * @param {object} [options]
 * @param {boolean} [options.optional=false] If set to `true`, type considers `undefined` and `null` as valid.
 */
class Type {
  constructor({optional = false} = {}) {
    if(optional) this.optional = true
  }

  static primitive = utils.primitive
  static stringify = utils.stringify

  /**
   * Allowed primitives. The type only validates values with the given primitives. If empty, the type validates any primitive.
   * @memberof Type
   * @static
   * @type Primitive[]
   * @default []
   */
  static primitives = []

  /**
   * Tests performed by the type to validate a value.
   * @memberof Type
   * @static
   * @type Object.<string, function>
   * @default {}
   */
  static tests = {}

  /**
   * Registers a type class so it become accessible from {@link Type}.
   * @param {function} type The type to register.
   * @return {function} The type you provided.
   * @throws {TypeError} `type` must be a class extending {@link Type}.
   * @example
   * class CustomType extends Type {}
   *
   * Type.register(CustomType)
   * // CustomType
   *
   * new Type.Custom() instanceof CustomType
   * // true
   *
   * Type.custom instanceof CustomType
   * // true
   *
   * Type.custom({optional: true}) instanceof CustomType
   * // true
   */
  static register(type) {
    if(typeof type !== 'function' || !(type.prototype instanceof Type)) {
      throw new TypeError('Can only register classes extending Type.')
    }

    const name = type.toString()
    this[name] = type
    this[name[0].toLowerCase() + name.substring(1)] = new Generator(type)

    return type
  }

  /**
   * Returns the string representation of type.
   * @return {string} String representation of type.
   */
  static toString() {
    const i = this.name.length - 4
    const name = this.name
    return this !== Type && name.substring(i) === 'Type' ? name.substring(0, i) : name
  }

  /**
   * Validates a value and returns the validation.
   * @param {*} value The value to validate.
   * @return {Validation} A validation corresponding to `value`.
   */
  validate(value) {
    return new Validation(this, value).continue(validation => {
      if(this.optional && (value === null || value === undefined)) {
        return validation.cancel()
      }

      const primitives = this.constructor.primitives
      const primitive = this.constructor.primitive(value)
      if(primitives.length && !primitives.includes(primitive)) {
        return validation.errors.add(
          `primitive type must be ${primitives.join(', ')}, got ${primitive}`
        )
      }

      Object.keys(this.constructor.tests).forEach(test => {
        if(test in this) validation.test(test)
      })
    })
  }

  /**
   * Validates a value and check if it succeed. Shortcut for `{@link Type#validate}(value).succeed`.
   * @param {*} value The value to validate.
   * @return {boolean} Equal to `true` if `value` is valid, `false` otherwise.
   */
  valid(value) {
    return this.validate(value).succeed
  }

  /**
   * Returns the string representation of type class.
   * @return {string} String representation of type class.
   */
  toString() {
    const options = Object.values(this).length
      ? `(${this.constructor.stringify(this).slice(1, -1)})`
      : ''
    return `${this.constructor}${options}`
  }
}

export default Type
