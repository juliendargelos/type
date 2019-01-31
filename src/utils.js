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
 * @memberof Type
 * @param {*} value The value to evaluate.
 * @return {Primitive} The primitive type of the given value.
 */
function primitive(value) {
  if(value === null) return 'null'
  if(typeof value === 'number' && isNaN(value)) return 'nan'
  if(Array.isArray(value)) return 'array'
  return typeof value
}

/**
 * Returns a string representation of the given value.
 * @memberof Type
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
function stringify(value, depth = 0) {
  if(depth >= 10) return primitive(value)
  switch(primitive(value)) {
    case 'object':
      return `{${
        Object.entries(value)
          .map(([k, v]) => `${k}: ${stringify(v, depth + 1)}`)
          .join(', ')
      }}`
    case 'array':
      return `[${
        value
          .map(v => stringify(v, depth + 1))
          .join(', ')
      }]`
    case 'string':
      return `'${value}'`
    default:
      return `${value}`
  }
}

export {
  stringify,
  primitive
}
