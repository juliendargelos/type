import Validation from '~/validation'

/**
 * Base type class.
 * @class Type
 * @param {object} [options]
 * @param {boolean} [options.optional=false] If set to true, type considers `undefined` and `null` as valid.
 */
class Type {
  constructor({optional = false} = {}) {
    if(optional) this.optional = true
  }

  /**
   * Allowed primitives.
   * @type Primitive[]
   */
  static primitives = []

  static tests = {}
  static all = []

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
    this.all.push(type)
    this[name] = type
    this[name[0].toLowerCase() + name.substring(1)] = require('~/generator').of(type)

    return type
  }

  /**
   * A string which represents the primitive type of a `value`:
   *
   * | primitive | condition (from strongest to lowest priority) |
   * |-----------|-----------------------------------------------|
   * | null      | `value === null`                              |
   * | nan       | `typeof value === 'number' && isNaN(value)`   |
   * | array     | `Array.isArray(value)`                        |
   * | undefined | `typeof value === 'undefined'`                |
   * | boolean   | `typeof value === 'boolean'`                  |
   * | number    | `typeof value === 'number'`                   |
   * | string    | `typeof value === 'string'`                   |
   * | object    | `typeof value === 'object'`                   |
   * | function  | `typeof value === 'function'`                 |
   *
   * @typedef {string} Primitive
   * @memberof Type
   * @alias Primitive
   */

  /**
   * Returns the primitive type of the given value.
   * @param {*} value The value to evaluate.
   * @return {Primitive} The primitive type of the given value.
   */
  static primitive(value) {
    if(value === null) return 'null'
    if(typeof value === 'number' && isNaN(value)) return 'nan'
    if(Array.isArray(value)) return 'array'
    return typeof value
  }

  /**
   * Returns a string representation of the given value.
   * @param {*} value The value to stringify.
   * @return {string} A string representation of `value`.
   * @example
   * Type.stringify(null)
   * // 'null'
   *
   * Type.stringify({foo: 'bar', bar: 2.2})
   * // '{foo: \'bar\', bar: 2.2}'
   *
   * Type.stringify([NaN, Infinity, undefined, true, () => {}])
   * // '[NaN, Infinity, undefined, true, function() {}]'
   */
  static stringify(value) {
    switch(this.primitive(value)) {
      case 'object':
        return `{${
          Object.entries(value).map(([k, v]) => `${k}: ${this.stringify(v)}`).join(', ')
        }}`
      case 'array':
        return `[${
          value.map(v => this.stringify(v)).join(', ')
        }]`
      case 'string':
        return `'${value}'`
      default:
        return `${value}`
    }
  }

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
        if(test in this) validation.test(test, this)
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
   * Returns the string representation of the type.
   * @return {string} String representation of the type.
   */
  toString() {
    const options = Object.values(this).length
      ? `(${this.constructor.stringify(this).slice(1, -1)})`
      : ''
    return `${this.constructor}${options}`
  }
}

export default Type
