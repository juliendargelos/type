import { a as _createClass, b as _classCallCheck } from './chunk-a3761d77.js';

/**
 * Creates an error.
 * @class Error
 * @param {string} message The error message.
 * @param {Validation} [validation] The validation corresponding to the error.
 */
var Error$1 =
/*#__PURE__*/
function () {
  function Error(message) {
    var validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Error);

    this.message = message;
    this.validation = validation;
  }

  _createClass(Error, [{
    key: "toString",
    value: function toString() {
      return "".concat(this.validation ? "".concat(this.validation, ": ") : '').concat(this.message, ".");
    }
  }, {
    key: "exception",
    get: function get() {
      return this.constructor.exception(this);
    }
  }], [{
    key: "for",
    value: function _for(message) {
      var validation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return message instanceof this ? message : new this(message, validation);
    }
  }, {
    key: "exception",
    value: function exception(subject) {
      var error = new TypeError("".concat(subject));
      if (TypeError.captureStackTrace) TypeError.captureStackTrace(error, TypeError);
      return error;
    }
  }]);

  return Error;
}();

export default Error$1;
