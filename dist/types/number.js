'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a number type.
 * @class Number
 * @memberof Type
 * @extends Type
 * @inheritparams
 * @param {boolean} [options.integer=false] If set to `true`, the type will only validate integers.
 * @param {boolean|object} [options.exclude=false] If set to `true`, the type will not validate numbers equal to `minimum` or `maximum`. An object can be passed to separatly specify exlusion for `minimum` and `maximum`:
 * @param {boolean} [options.exclude.minimum=false] If set to `true`, the type will not validate numbers equal to `minimum`.
 * @param {boolean} [options.exclude.maximum=false] If set to `true`, the type will not validate numbers equal to `maximum`.
 * @param {boolean?} [options.finite=null] If set to `true`, the type will validate any number except `Infinity` and `-Infinity`, if set to `false`, the type will only validate `Infinity` and `-Infinity`.
 * @param {number?} [options.minimum=null] If a value is given, the type will only validate numbers that are greater than (or, depending on `exclude`, equal to) the given value.
 * @param {number?} [options.maximum=null] If a value is given, the type will only validate numbers that are lower than (or, depending on `exclude`, equal to) the given value.
 */

var NumberType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(NumberType, _Type);

  function NumberType() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$integer = _ref.integer,
        integer = _ref$integer === void 0 ? false : _ref$integer,
        _ref$exclude = _ref.exclude,
        exclude = _ref$exclude === void 0 ? false : _ref$exclude,
        _ref$finite = _ref.finite,
        finite = _ref$finite === void 0 ? null : _ref$finite,
        _ref$minimum = _ref.minimum,
        minimum = _ref$minimum === void 0 ? null : _ref$minimum,
        _ref$maximum = _ref.maximum,
        maximum = _ref$maximum === void 0 ? null : _ref$maximum,
        options = __chunk_1._objectWithoutProperties(_ref, ["integer", "exclude", "finite", "minimum", "maximum"]);

    __chunk_1._classCallCheck(this, NumberType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(NumberType).call(this, options));
    if (integer) _this.integer = true;
    if (exclude) _this.exclude = exclude;
    if (finite !== null) _this.finite = !!finite;
    if (minimum !== null) _this.minimum = minimum;
    if (maximum !== null) _this.maximum = maximum;
    return _this;
  }

  __chunk_1._createClass(NumberType, [{
    key: "excludeMinimum",
    get: function get() {
      return this.exclude === true || this.exclude && this.exclude.minimum;
    }
  }, {
    key: "excludeMaximum",
    get: function get() {
      return this.exclude === true || this.exclude && this.exclude.maximum;
    }
  }]);

  return NumberType;
}(type);

__chunk_1._defineProperty(NumberType, "primitives", ['number']);

__chunk_1._defineProperty(NumberType, "tests", {
  integer: function integer(_ref2) {
    var value = _ref2.value,
        errors$$1 = _ref2.errors;
    if (Math.floor(value) !== value) errors$$1.add('must be an integer');
  },
  finite: function finite(_ref3) {
    var value = _ref3.value,
        errors$$1 = _ref3.errors,
        _finite = _ref3.type.finite;
    if (_finite !== (value !== Infinity && value !== -Infinity)) errors$$1.add("must be ".concat(_finite ? '' : 'in', "finite"));
  },
  minimum: function minimum(_ref4) {
    var value = _ref4.value,
        errors$$1 = _ref4.errors,
        _ref4$type = _ref4.type,
        _minimum = _ref4$type.minimum,
        excludeMinimum = _ref4$type.excludeMinimum;
    if (value < _minimum || value === _minimum && excludeMinimum) errors$$1.add("must be greater than".concat(excludeMinimum ? '' : ' or equal to').concat(_minimum));
  },
  maximum: function maximum(_ref5) {
    var value = _ref5.value,
        errors$$1 = _ref5.errors,
        _ref5$type = _ref5.type,
        _maximum = _ref5$type.maximum,
        excludeMaximum = _ref5$type.excludeMaximum;
    if (value > _maximum || value === _maximum && excludeMaximum) errors$$1.add("must be lower than".concat(excludeMaximum ? '' : ' or equal to', " ").concat(_maximum));
  }
});

module.exports = NumberType;
