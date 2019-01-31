import { b as _classCallCheck, h as _objectSpread, i as _construct } from './chunk-a3761d77.js';

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
