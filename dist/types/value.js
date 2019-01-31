'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a specific value type.
 * @class Value
 * @extends Type
 * @inheritparams
 */

var ValueType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(ValueType, _Type);

  function ValueType() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$only = _ref.only,
        only = _ref$only === void 0 ? null : _ref$only,
        _ref$except = _ref.except,
        except = _ref$except === void 0 ? null : _ref$except,
        options = __chunk_1._objectWithoutProperties(_ref, ["only", "except"]);

    __chunk_1._classCallCheck(this, ValueType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(ValueType).call(this, options));
    if (only) _this.only = Array.isArray(only) ? only : [only];
    if (except) _this.except = Array.isArray(except) ? except : [except];
    return _this;
  }

  return ValueType;
}(type);

__chunk_1._defineProperty(ValueType, "tests", {
  only: function only(_ref2) {
    var value = _ref2.value,
        errors$$1 = _ref2.errors,
        _only = _ref2.type.only;
    return !_only.includes(value) && errors$$1.add("must be ".concat(_only.length > 1 ? 'one of ' : '') + _only.map(function (v) {
      return type.stringify(v);
    }).join(', '));
  },
  except: function except(_ref3) {
    var value = _ref3.value,
        errors$$1 = _ref3.errors,
        _except = _ref3.type.except;
    return _except.includes(value) && errors$$1.add("must not be ".concat(_except.length > 1 ? 'one of ' : '') + _except.map(function (v) {
      return type.stringify(v);
    }).join(', '));
  }
});

module.exports = ValueType;
