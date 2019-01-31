import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a class instance type.
 * @class Instance
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {function?} [klass=null] If provided, type will only validate values that are instances of `klass`.
 */

var InstanceType =
/*#__PURE__*/
function (_Type) {
  _inherits(InstanceType, _Type);

  function InstanceType() {
    var _this;

    var klass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, InstanceType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InstanceType).call(this, options));
    if (klass !== null) _this.klass = klass;
    return _this;
  }

  return InstanceType;
}(Type);

_defineProperty(InstanceType, "primitives", ['array', 'object', 'function']);

_defineProperty(InstanceType, "tests", {
  klass: function klass(_ref) {
    var value = _ref.value,
        errors = _ref.errors,
        _klass = _ref.type.klass;
    value instanceof _klass || errors.add("must be an instance of ".concat(_klass));
  }
});

export default InstanceType;
