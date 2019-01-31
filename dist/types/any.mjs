import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents any type.
 * @class Any
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var AnyType =
/*#__PURE__*/
function (_Type) {
  _inherits(AnyType, _Type);

  function AnyType() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$optional = _ref.optional,
        optional = _ref$optional === void 0 ? true : _ref$optional;

    _classCallCheck(this, AnyType);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnyType).call(this, {
      optional: optional
    }));
  }

  return AnyType;
}(Type);

_defineProperty(AnyType, "primitives", ['nan', 'boolean', 'number', 'string', 'array', 'object', 'function']);

export default AnyType;
