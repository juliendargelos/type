import { c as _inherits, b as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf, l as _defineProperty, k as _slicedToArray } from '../chunk-a3761d77.js';
import '../error.mjs';
import '../errors.mjs';
import '../generator.mjs';
import '../utils.mjs';
import '../validation.mjs';
import Type from '../type.mjs';

/**
 * Represents an object type.
 * @class Object
 * @extends Type
 * @inheritparams
 */

var ObjectType =
/*#__PURE__*/
function (_Type) {
  _inherits(ObjectType, _Type);

  function ObjectType() {
    var _this;

    var structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ObjectType);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ObjectType).call(this, options));
    if (structure !== null) _this.structure = structure;
    return _this;
  }

  return ObjectType;
}(Type);

_defineProperty(ObjectType, "primitives", ['object']);

_defineProperty(ObjectType, "tests", {
  structure: function structure(_ref) {
    var value = _ref.value,
        errors = _ref.errors,
        _structure = _ref.type.structure;
    Object.entries(_structure).some(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          attribute = _ref3[0],
          type = _ref3[1];

      return type.validate(value[attribute]).annotate('attribute', attribute).delegate(errors).failed;
    });
    if (errors.delegated) errors.prepend('structure is invalid');
  }
});

export default ObjectType;
