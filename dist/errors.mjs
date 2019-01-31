import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, a as _createClass, f as _toConsumableArray, g as _wrapNativeSuper } from './chunk-a3761d77.js';
import Error$1 from './error.mjs';

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
  _inherits(Errors, _Array);

  function Errors() {
    var _this;

    var validation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Errors);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Errors).call(this));
    _this.validation = validation;
    return _this;
  }

  _createClass(Errors, [{
    key: "add",
    value: function add() {
      var _this2 = this;

      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      messages.forEach(function (message) {
        return _this2.push(Error$1.for(message, _this2.validation));
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
        return _this3.splice(0, 0, Error$1.for(message, _this3.validation));
      });
      return this;
    }
  }, {
    key: "delegate",
    value: function delegate(errors) {
      if (this.length) {
        errors.delegated = true;
        errors.push.apply(errors, _toConsumableArray(this));
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
      return Error$1.exception(this);
    }
  }]);

  return Errors;
}(_wrapNativeSuper(Array));

export default Errors;
