'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents an string type.
 * @class String
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var StringType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(StringType, _Type);

  function StringType() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$length = _ref.length,
        length = _ref$length === void 0 ? null : _ref$length,
        _ref$minimum = _ref.minimum,
        minimum = _ref$minimum === void 0 ? null : _ref$minimum,
        _ref$maximum = _ref.maximum,
        maximum = _ref$maximum === void 0 ? null : _ref$maximum,
        _ref$only = _ref.only,
        only = _ref$only === void 0 ? null : _ref$only,
        _ref$except = _ref.except,
        except = _ref$except === void 0 ? null : _ref$except,
        _ref$pattern = _ref.pattern,
        pattern = _ref$pattern === void 0 ? null : _ref$pattern,
        options = __chunk_1._objectWithoutProperties(_ref, ["length", "minimum", "maximum", "only", "except", "pattern"]);

    __chunk_1._classCallCheck(this, StringType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(StringType).call(this, options));
    if (length !== null) _this.length = length;
    if (minimum !== null) _this.minimum = minimum;
    if (maximum !== null) _this.maximum = maximum;
    if (only !== null) _this.only = only;
    if (except !== null) _this.except = except;
    if (pattern !== null) _this.pattern = pattern;
    return _this;
  }

  return StringType;
}(type);

__chunk_1._defineProperty(StringType, "primitives", ['string']);

__chunk_1._defineProperty(StringType, "tests", {
  length: function length(_ref2) {
    var value = _ref2.value,
        errors$$1 = _ref2.errors,
        _length = _ref2.type.length;
    return value.length !== _length && errors$$1.add("length must be equal to ".concat(_length, ", ") + "got length equal to ".concat(value.length));
  },
  minimum: function minimum(_ref3) {
    var value = _ref3.value,
        errors$$1 = _ref3.errors,
        _minimum = _ref3.type.minimum;
    return value.length < _minimum && errors$$1.add("length must be greater than or equal to ".concat(_minimum, ", ") + "got length equal to ".concat(value.length));
  },
  maximum: function maximum(_ref4) {
    var value = _ref4.value,
        errors$$1 = _ref4.errors,
        _maximum = _ref4.type.maximum;
    return value.length > _maximum && errors$$1.add("length must be lower than or equal to ".concat(_maximum, ", ") + "got length equal to ".concat(value.length));
  },
  only: function only(_ref5) {
    var value = _ref5.value,
        errors$$1 = _ref5.errors,
        _only = _ref5.type.only;

    if (value.split('').some(function (char) {
      return !_only.includes(char);
    })) {
      errors$$1.add("must only contain ".concat(_only));
    }
  },
  except: function except(_ref6) {
    var value = _ref6.value,
        errors$$1 = _ref6.errors,
        _except = _ref6.type.except;

    if (value.split('').some(function (char) {
      return _except.includes(char);
    })) {
      errors$$1.add("must not contain ".concat(_except));
    }
  },
  pattern: function pattern(_ref7) {
    var value = _ref7.value,
        errors$$1 = _ref7.errors,
        _pattern = _ref7.type.pattern;
    if (!value.match(_pattern)) errors$$1.add("must match pattern ".concat(_pattern));
  }
});

module.exports = StringType;
