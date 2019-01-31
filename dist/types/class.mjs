import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents a class type.
 * @class Class
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {function?} [parent=null] If provided, type will only validate classes extending `parent`.
 */

var ClassType =
/*#__PURE__*/
function (_Type) {
  _inherits(ClassType, _Type);

  function ClassType() {
    var _this;

    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ClassType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassType).call(this, options));
    if (parent !== null) _this.parent = parent;
    return _this;
  }

  return ClassType;
}(Type);

_defineProperty(ClassType, "primitives", ['function']);

_defineProperty(ClassType, "tests", {
  parent: function parent(_ref) {
    var prototype = _ref.value.prototype,
        errors = _ref.errors,
        _parent = _ref.type.parent;
    prototype instanceof _parent || errors.add("must be a class extending ".concat(_parent));
  }
});

export default ClassType;
