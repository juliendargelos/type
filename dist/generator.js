'use strict';

var __chunk_1 = require('./chunk-0e3b945c.js');

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
var Generator = function Generator(type) {
  __chunk_1._classCallCheck(this, Generator);

  var instance = new type();

  var generator = function generator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return __chunk_1._construct(type, args);
  };

  delete generator.length;
  delete generator.name;
  return Object.setPrototypeOf(Object.defineProperties(generator, __chunk_1._objectSpread({}, Object.getOwnPropertyDescriptors(instance), {
    toString: {
      value: function value() {
        return instance.toString();
      }
    }
  })), type.prototype);
};

module.exports = Generator;
