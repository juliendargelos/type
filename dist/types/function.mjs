import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a function type.
 * @class Function
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var FunctionType =
/*#__PURE__*/
function (_Type) {
  _inherits(FunctionType, _Type);

  function FunctionType() {
    _classCallCheck(this, FunctionType);

    return _possibleConstructorReturn(this, _getPrototypeOf(FunctionType).apply(this, arguments));
  }

  return FunctionType;
}(Type);

_defineProperty(FunctionType, "primitives", ['function']);

export default FunctionType;
