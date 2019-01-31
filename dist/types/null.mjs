import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a null type.
 * @class Null
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var NullType =
/*#__PURE__*/
function (_Type) {
  _inherits(NullType, _Type);

  function NullType() {
    _classCallCheck(this, NullType);

    return _possibleConstructorReturn(this, _getPrototypeOf(NullType).apply(this, arguments));
  }

  return NullType;
}(Type);

_defineProperty(NullType, "primitives", ['null']);

export default NullType;
