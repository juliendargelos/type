import { b as _classCallCheck, h as _objectSpread, i as _construct } from './chunk-a3761d77.js';

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
  _classCallCheck(this, Generator);

  var instance = new type();

  var generator = function generator() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(type, args);
  };

  delete generator.length;
  delete generator.name;
  return Object.setPrototypeOf(Object.defineProperties(generator, _objectSpread({}, Object.getOwnPropertyDescriptors(instance), {
    toString: {
      value: function value() {
        return instance.toString();
      }
    }
  })), type.prototype);
};

export default Generator;
