import { c as _inherits, m as _objectWithoutProperties, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a specific value type.
 * @class Value
 * @extends Type
 * @inheritparams
 */

var ValueType =
/*#__PURE__*/
function (_Type) {
  _inherits(ValueType, _Type);

  function ValueType() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$only = _ref.only,
        only = _ref$only === void 0 ? null : _ref$only,
        _ref$except = _ref.except,
        except = _ref$except === void 0 ? null : _ref$except,
        options = _objectWithoutProperties(_ref, ["only", "except"]);

    _classCallCheck(this, ValueType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValueType).call(this, options));
    if (only) _this.only = Array.isArray(only) ? only : [only];
    if (except) _this.except = Array.isArray(except) ? except : [except];
    return _this;
  }

  return ValueType;
}(Type);

_defineProperty(ValueType, "tests", {
  only: function only(_ref2) {
    var value = _ref2.value,
        errors = _ref2.errors,
        _only = _ref2.type.only;
    return !_only.includes(value) && errors.add("must be ".concat(_only.length > 1 ? 'one of ' : '') + _only.map(function (v) {
      return Type.stringify(v);
    }).join(', '));
  },
  except: function except(_ref3) {
    var value = _ref3.value,
        errors = _ref3.errors,
        _except = _ref3.type.except;
    return _except.includes(value) && errors.add("must not be ".concat(_except.length > 1 ? 'one of ' : '') + _except.map(function (v) {
      return Type.stringify(v);
    }).join(', '));
  }
});

export default ValueType;
