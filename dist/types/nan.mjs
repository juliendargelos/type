import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a nan (*Not A Number*) type.
 * @class Nan
 * @extends Type
 * @inheritparams
 */

var NanType =
/*#__PURE__*/
function (_Type) {
  _inherits(NanType, _Type);

  function NanType() {
    _classCallCheck(this, NanType);

    return _possibleConstructorReturn(this, _getPrototypeOf(NanType).apply(this, arguments));
  }

  return NanType;
}(Type);

_defineProperty(NanType, "primitives", ['nan']);

export default NanType;
