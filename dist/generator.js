'use strict';

var __chunk_1 = require('./chunk-0e3b945c.js');

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
