import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a boolean type.
 * @class Boolean
 * @extends Type
 * @inheritparams
 */

var BooleanType =
/*#__PURE__*/
function (_Type) {
  _inherits(BooleanType, _Type);

  function BooleanType() {
    _classCallCheck(this, BooleanType);

    return _possibleConstructorReturn(this, _getPrototypeOf(BooleanType).apply(this, arguments));
  }

  return BooleanType;
}(Type);

_defineProperty(BooleanType, "primitives", ['boolean']);

export default BooleanType;
