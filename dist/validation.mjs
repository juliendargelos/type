import { a as _createClass, k as _slicedToArray, b as _classCallCheck } from './chunk-a3761d77.js';
import './error.mjs';
import Errors from './errors.mjs';
import { stringify } from './utils.mjs';

/**
 * Creates a new Validation.
 * @class Validation
 * @param {Type?} [type=null] The validation type.
 * @param {*?} [value=null] The validation value.
 */

var Validation =
/*#__PURE__*/
function () {
  function Validation() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Validation);

    this.annotations = [];
    /**
     * The type performing the validation
     * @type Type?
     */

    this.type = type;
    /**
     * The value being validated.
     * @type *?
     */

    this.value = value;
    /**
     * Validation errors.
     * @type Errors
     */

    this.errors = new Errors(this);
    /**
     * Equal to `true` if {@link Validation#cancel} has been called at least one time, `false` otherwise.
     * @type boolean
     */

    this.canceled = false;
  }
  /**
   * Equal to `true` if the validation has no error, `false` otherwise.
   * @type boolean
   * @readonly
   */


  _createClass(Validation, [{
    key: "toString",

    /**
     * Returns the string representation of validation.
     * @return {string} String representation of validation.
     */
    value: function toString() {
      var type = this.type ? "".concat(this.type, " ") : '';
      var annotations = this.annotations.length ? "[".concat(this.annotations.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return "".concat(k, ": ").concat(v);
      }).join(', '), "] ") : '';
      return "".concat(annotations).concat(this.state, " ").concat(type, "value ").concat(stringify(this.value));
    }
    /**
     * Annotates the validation. The annotation will appear in the string returned by {@link Validation#toString}.
     * @param {string} key The key of the annotation.
     * @param {string} value The value of the annotation.
     * @return {Validation} `this`
     */

  }, {
    key: "annotate",
    value: function annotate(key, value) {
      this.annotations.push([key, value]);
      return this;
    }
    /**
     * Continues the validation performing a test from {@link Type.tests}.
     * @param {string} name Name of the test (used as a key for {@link Type.tests}).
     * @return {Validation} `this`
     */

  }, {
    key: "test",
    value: function test(name) {
      if (this.type) this.continue(this.type.constructor.tests[name]);
      return this;
    }
    /**
     * @callback callback
     * @memberof Validation
     * @param {Validation} validation The validation begin continued.
     * @param {...*} parameters Extra parameters.
     */

    /**
     * Continues the validation.
     * @param {Validation.callback} callback Will be called unless validation {@linkplain Validation#failed failed} or has been {@linkplain Validation#canceled canceled}.
     * @param {...*} parameters Extra parameters to provide when calling `callback`.
     * @return {Validation} `this`
     */

  }, {
    key: "continue",
    value: function _continue(callback) {
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }

      if (!this.canceled && !this.failed) callback.call.apply(callback, [this, this].concat(parameters));
      return this;
    }
    /**
     * Cancels the validation, {@link Validation#continue} and {@link Validation#test} will not have any effect after that.
     * @param {Validation.callback} callback Will be called unless one of {@link Validation#canceled} and {@link Validation#failed} is `true`.
     * @param {...*} parameters Extra parameters to provide when calling `callback`.
     * @return {Validation} `this`
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this.canceled = true;
      return this;
    }
    /**
     * Throws error if validation {@linkplain Validation#failed failed}.
     * @throws {TypeError} Message equal to {@link Errors#toString}.
     */

  }, {
    key: "throw",
    value: function _throw() {
      if (this.failed) throw this.errors.exception;
    }
    /**
     * Add all validation errors to the given {@link Errors} or Array.
     * @param {Errors|Array} errors The {@link Errors} or Array to feed with errors.
     * @return {Validation} `this`
     */

  }, {
    key: "delegate",
    value: function delegate(errors) {
      this.errors.delegate(errors);
      return this;
    }
  }, {
    key: "succeed",
    get: function get() {
      return this.errors.empty;
    }
    /**
     * Equal to `true` if the validation has any error, `false` otherwise.
     * @type boolean
     * @readonly
     */

  }, {
    key: "failed",
    get: function get() {
      return this.errors.any;
    }
    /**
     * Equal to `'Valid'` if validation {@linkplain Validation#succeed succeed}, `'Invalid'` if it {@linkplain Validation#failed failed}.
     * @type string
     * @readonly
     */

  }, {
    key: "state",
    get: function get() {
      return this.succeed ? 'Valid' : 'Invalid';
    }
  }]);

  return Validation;
}();

export default Validation;
