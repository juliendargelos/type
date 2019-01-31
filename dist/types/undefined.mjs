import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents an undefined type.
 * @class Undefined
 * @extends Type
 * @inheritparams
 */

var UndefinedType =
/*#__PURE__*/
function (_Type) {
  _inherits(UndefinedType, _Type);

  function UndefinedType() {
    _classCallCheck(this, UndefinedType);

    return _possibleConstructorReturn(this, _getPrototypeOf(UndefinedType).apply(this, arguments));
  }

  return UndefinedType;
}(Type);

_defineProperty(UndefinedType, "primitives", ['undefined']);

export default UndefinedType;
