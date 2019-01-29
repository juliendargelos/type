function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

/**
 * Creates a new Validation.
 * @class Validation
 * @param {Type} type The validation type.
 * @param {*} value The validation value.
 */

var Validation =
/*#__PURE__*/
function () {
  function Validation() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Type();
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Validation);

    this.type = type;
    this.value = value;
    /**
     * Validation errors.
     * @type Errors
     */

    this.errors = new Errors(this);
    this.annotations = [];
    this.canceled = false;
    this.delegated = false;
  }
  /**
   * Equal to `true` if the validation has no error, `false` otherwise.
   * @type boolean
   * @readonly
   */


  _createClass(Validation, [{
    key: "toString",
    value: function toString() {
      var annotations = this.annotations.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        return "".concat(k, ": ").concat(v);
      }).join(', ');
      if (annotations) annotations = "[".concat(annotations, "] ");
      return "".concat(annotations).concat(this.state, " ").concat(this.type, " value ").concat(Type.stringify(this.value));
    }
  }, {
    key: "annotate",
    value: function annotate(key, value) {
      this.annotations.push([key, value]);
      return this;
    }
  }, {
    key: "test",
    value: function test(name) {
      for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        parameters[_key - 1] = arguments[_key];
      }

      this.continue.apply(this, [this.type.constructor.tests[name]].concat(parameters));
      return this;
    }
  }, {
    key: "continue",
    value: function _continue(callback) {
      for (var _len2 = arguments.length, parameters = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        parameters[_key2 - 1] = arguments[_key2];
      }

      if (!this.canceled && !this.failed) callback.call.apply(callback, [this, this].concat(parameters));
      return this;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.canceled = true;
      return this;
    }
  }, {
    key: "throw",
    value: function _throw() {
      if (this.failed) throw this.errors.exception;
    }
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
     * Equal to `'Valid'` if {@link Validation#succeed} is `true`, `'Invalid'` otherwise.
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

    _classCallCheck(this, Type);

    if (optional) this.optional = true;
  }
  /**
   * Allowed primitives.
   * @type Primitive[]
   */


  _createClass(Type, [{
    key: "validate",

    /**
     * Validates a value and returns the validation.
     * @param {*} value The value to validate.
     * @return {Validation} A validation corresponding to `value`.
     */
    value: function validate(value) {
      var _this = this;

      return new Validation(this, value).continue(function (validation) {
        if (_this.optional && (value === null || value === undefined)) {
          return validation.cancel();
        }

        var primitives = _this.constructor.primitives;

        var primitive = _this.constructor.primitive(value);

        if (primitives.length && !primitives.includes(primitive)) {
          return validation.errors.add("primitive type must be ".concat(primitives.join(', '), ", got ").concat(primitive));
        }

        Object.keys(_this.constructor.tests).forEach(function (test) {
          if (test in _this) validation.test(test, _this);
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
     * Returns the string representation of the type.
     * @return {string} String representation of the type.
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
      this.all.push(type);
      this[name] = type;
      this[name[0].toLowerCase() + name.substring(1)] = require("./generator").of(type);
      return type;
    }
    /**
     * A string which represents the primitive type of a `value`:
     *
     * | primitive | condition (from strongest to lowest priority) |
     * |-----------|-----------------------------------------------|
     * | null      | `value === null`                              |
     * | nan       | `typeof value === 'number' && isNaN(value)`   |
     * | array     | `Array.isArray(value)`                        |
     * | undefined | `typeof value === 'undefined'`                |
     * | boolean   | `typeof value === 'boolean'`                  |
     * | number    | `typeof value === 'number'`                   |
     * | string    | `typeof value === 'string'`                   |
     * | object    | `typeof value === 'object'`                   |
     * | function  | `typeof value === 'function'`                 |
     *
     * @typedef {string} Primitive
     * @memberof Type
     * @alias Primitive
     */

    /**
     * Returns the primitive type of the given value.
     * @param {*} value The value to evaluate.
     * @return {Primitive} The primitive type of the given value.
     */

  }, {
    key: "primitive",
    value: function primitive(value) {
      if (value === null) return 'null';
      if (typeof value === 'number' && isNaN(value)) return 'nan';
      if (Array.isArray(value)) return 'array';
      return _typeof(value);
    }
    /**
     * Returns a string representation of the given value.
     * @param {*} value The value to stringify.
     * @return {string} A string representation of `value`.
     * @example
     * Type.stringify(null)
     * // 'null'
     *
     * Type.stringify({foo: 'bar', bar: 2.2})
     * // '{foo: \'bar\', bar: 2.2}'
     *
     * Type.stringify([NaN, Infinity, undefined, true, () => {}])
     * // '[NaN, Infinity, undefined, true, function() {}]'
     */

  }, {
    key: "stringify",
    value: function stringify(value) {
      var _this2 = this;

      switch (this.primitive(value)) {
        case 'object':
          return "{".concat(Object.entries(value).map(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                k = _ref3[0],
                v = _ref3[1];

            return "".concat(k, ": ").concat(_this2.stringify(v));
          }).join(', '), "}");

        case 'array':
          return "[".concat(value.map(function (v) {
            return _this2.stringify(v);
          }).join(', '), "]");

        case 'string':
          return "'".concat(value, "'");

        default:
          return "".concat(value);
      }
    }
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

_defineProperty(Type, "primitives", []);

_defineProperty(Type, "tests", {});

_defineProperty(Type, "all", []);

var types = {
  "any.js": _interopRequireDefault(require("./types/any.js")).default,
  "array.js": _interopRequireDefault(require("./types/array.js")).default,
  "boolean.js": _interopRequireDefault(require("./types/boolean.js")).default,
  "mixed.js": _interopRequireDefault(require("./types/mixed.js")).default,
  "nan.js": _interopRequireDefault(require("./types/nan.js")).default,
  "null.js": _interopRequireDefault(require("./types/null.js")).default,
  "number.js": _interopRequireDefault(require("./types/number.js")).default,
  "object.js": _interopRequireDefault(require("./types/object.js")).default,
  "string.js": _interopRequireDefault(require("./types/string.js")).default,
  "undefined.js": _interopRequireDefault(require("./types/undefined.js")).default,
  "value.js": _interopRequireDefault(require("./types/value.js")).default
};
Object.values(types).forEach(function (type) {
  return Type.register(type);
});

export default Type;
