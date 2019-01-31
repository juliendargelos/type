'use strict';

var __chunk_1 = require('./chunk-0e3b945c.js');
require('./error.js');
require('./errors.js');
var generator = require('./generator.js');
var utils = require('./utils.js');
var validation = require('./validation.js');

/**
 * Base type class.
 * @class Type
 * @param {object} [options]
 * @param {boolean} [options.optional=false] If set to `true`, type considers `undefined` and `null` as valid.
 */

var Type =
/*#__PURE__*/
function () {
  function Type() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$optional = _ref.optional,
        optional = _ref$optional === void 0 ? false : _ref$optional;

    __chunk_1._classCallCheck(this, Type);

    if (optional) this.optional = true;
  }

  __chunk_1._createClass(Type, [{
    key: "validate",

    /**
     * Validates a value and returns the validation.
     * @param {*} value The value to validate.
     * @return {Validation} A validation corresponding to `value`.
     */
    value: function validate(value) {
      var _this = this;

      return new validation(this, value).continue(function (validation$$1) {
        if (_this.optional && (value === null || value === undefined)) {
          return validation$$1.cancel();
        }

        var primitives = _this.constructor.primitives;

        var primitive = _this.constructor.primitive(value);

        if (primitives.length && !primitives.includes(primitive)) {
          return validation$$1.errors.add("primitive type must be ".concat(primitives.join(', '), ", got ").concat(primitive));
        }

        Object.keys(_this.constructor.tests).forEach(function (test) {
          if (test in _this) validation$$1.test(test);
        });
      });
    }
    /**
     * Validates a value and check if it succeed. Shortcut for `{@link Type#validate}(value).succeed`.
     * @param {*} value The value to validate.
     * @return {boolean} Equal to `true` if `value` is valid, `false` otherwise.
     */

  }, {
    key: "valid",
    value: function valid(value) {
      return this.validate(value).succeed;
    }
    /**
     * Returns the string representation of type class.
     * @return {string} String representation of type class.
     */

  }, {
    key: "toString",
    value: function toString() {
      var options = Object.values(this).length ? "(".concat(this.constructor.stringify(this).slice(1, -1), ")") : '';
      return "".concat(this.constructor).concat(options);
    }
  }], [{
    key: "register",

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
    value: function register(type) {
      if (typeof type !== 'function' || !(type.prototype instanceof Type)) {
        throw new TypeError('Can only register classes extending Type.');
      }

      var name = type.toString();
      this[name] = type;
      this[name[0].toLowerCase() + name.substring(1)] = new generator(type);
      return type;
    }
    /**
     * Returns the string representation of type.
     * @return {string} String representation of type.
     */

  }, {
    key: "toString",
    value: function toString() {
      var i = this.name.length - 4;
      var name = this.name;
      return this !== Type && name.substring(i) === 'Type' ? name.substring(0, i) : name;
    }
  }]);

  return Type;
}();

__chunk_1._defineProperty(Type, "primitive", utils.primitive);

__chunk_1._defineProperty(Type, "stringify", utils.stringify);

__chunk_1._defineProperty(Type, "primitives", []);

__chunk_1._defineProperty(Type, "tests", {});

module.exports = Type;
