/**
 * Type generator class.
 * @class Generator
 * @extends Function
 * @extends Type
 * @param {function} type The type to use for generator.
 * @return {Generator.<type>} A generator that is also an instance of the given type.
 * @example
 * const number = new Generator(Type.Number)
 *
 * number.valid(2)
 * // true
 *
 * number.valid('foo')
 * // false
 *
 * number({minimum: 3}).valid(2)
 * // false
 */
class Generator {
  constructor(type) {
    const instance = new type()
    const generator = (...args) => new type(...args)
    delete generator.length
    delete generator.name
    return Object.setPrototypeOf(Object.defineProperties(
      generator,
      {
        ...Object.getOwnPropertyDescriptors(instance),
        toString: {value: () => instance.toString()}
      }
    ), type.prototype)
  }
}

export default Generator
