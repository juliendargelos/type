'use strict';

var __chunk_1 = require('./chunk-0e3b945c.js');
var error = require('./error.js');

/**
 * Creates an array of {@link Error}.
 * @class Errors
 * @extends Array
 * @param {Validation} [validation] The validation corresponding to errors.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array Array}
 */

var Errors =
/*#__PURE__*/
function (_Array) {
  __chunk_1._inherits(Errors, _Array);

  function Errors() {
    var _this;

    var validation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    __chunk_1._classCallCheck(this, Errors);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(Errors).call(this));
    _this.validation = validation;
    return _this;
  }

  __chunk_1._createClass(Errors, [{
    key: "add",
    value: function add() {
      var _this2 = this;

      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      messages.forEach(function (message) {
        return _this2.push(error.for(message, _this2.validation));
      });
      return this;
    }
  }, {
    key: "prepend",
    value: function prepend() {
      var _this3 = this;

      for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        messages[_key2] = arguments[_key2];
      }

      messages.forEach(function (message) {
        return _this3.splice(0, 0, error.for(message, _this3.validation));
      });
      return this;
    }
  }, {
    key: "delegate",
    value: function delegate(errors) {
      if (this.length) {
        errors.delegated = true;
        errors.push.apply(errors, __chunk_1._toConsumableArray(this));
      }

      return this;
    }
    /**
     * Returns the string representation of errors.
     * @return {string} String representation of errors.
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.join("\n");
    }
  }, {
    key: "empty",
    get: function get() {
      return !this.length;
    }
  }, {
    key: "any",
    get: function get() {
      return !!this.length;
    }
  }, {
    key: "exception",
    get: function get() {
      return error.exception(this);
    }
  }]);

  return Errors;
}(__chunk_1._wrapNativeSuper(Array));

module.exports = Errors;
