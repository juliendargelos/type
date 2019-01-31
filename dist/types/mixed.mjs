import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty, f as _toConsumableArray } from '../chunk-a3761d77.js';
import '../error.mjs';
import Errors from '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a mixed type.
 * @class Mixed
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var MixedType =
/*#__PURE__*/
function (_Type) {
  _inherits(MixedType, _Type);

  function MixedType() {
    var _this;

    _classCallCheck(this, MixedType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MixedType).call(this));

    for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
      types[_key] = arguments[_key];
    }

    _this.types = types;
    return _this;
  }

  return MixedType;
}(Type);

_defineProperty(MixedType, "tests", {
  types: function types(_ref) {
    var value = _ref.value,
        errors = _ref.errors,
        _types = _ref.type.types;
    var typeErrors = new Errors();

    var failed = _types.every(function (type) {
      return type.validate(value).delegate(typeErrors).failed;
    });

    if (failed) errors.add.apply(errors, ["type must be one of ".concat(_types.join(', '))].concat(_toConsumableArray(typeErrors)));
  }
});

export default MixedType;
