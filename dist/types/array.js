'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents an array type.
 * @class Array
 * @extends Type
 * @inheritparams :1
 * @param {(Type[]|Type)?} [structure=null] The structure an array must have to be valid. If a {@link Type} is given, all array values must be valid for the given type. If a `Array.<{@link Type}>` is given, each value of the array must be valid for the given type at the same index. Overflow values are ignored.
 * @param {number?} [options.length=null] If provided, the type will only validate arrays with a length equal to the given value.
 * @param {number?} [options.minimum=null] If provided, the type will only validate arrays with a length greater than or equal to the given value.
 * @param {number?} [options.maximum=null] If provided, the type will only validate arrays with a length lower than or equal to the given value.
 */

var ArrayType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(ArrayType, _Type);

  function ArrayType() {
    var _this;

    var structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$length = _ref.length,
        length = _ref$length === void 0 ? null : _ref$length,
        _ref$minimum = _ref.minimum,
        minimum = _ref$minimum === void 0 ? null : _ref$minimum,
        _ref$maximum = _ref.maximum,
        maximum = _ref$maximum === void 0 ? null : _ref$maximum,
        options = __chunk_1._objectWithoutProperties(_ref, ["length", "minimum", "maximum"]);

    __chunk_1._classCallCheck(this, ArrayType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(ArrayType).call(this, options));
    if (structure !== null) _this.structure = structure;
    if (length !== null) _this.length = length;
    if (minimum !== null) _this.minimum = minimum;
    if (maximum !== null) _this.maximum = maximum;
    return _this;
  }

  return ArrayType;
}(type);

__chunk_1._defineProperty(ArrayType, "primitives", ['array']);

__chunk_1._defineProperty(ArrayType, "tests", {
  length: function length(_ref2) {
    var value = _ref2.value,
        errors$$1 = _ref2.errors,
        _length = _ref2.type.length;
    return value.length !== _length && errors$$1.add("length must be equal to ".concat(_length, ", ") + "got length equal to ".concat(value.length));
  },
  minimum: function minimum(_ref3) {
    var value = _ref3.value,
        errors$$1 = _ref3.errors,
        _minimum = _ref3.type.minimum;
    return value.length < _minimum && errors$$1.add("length must be greater than or equal to ".concat(_minimum, ", ") + "got length equal to ".concat(value.length));
  },
  maximum: function maximum(_ref4) {
    var value = _ref4.value,
        errors$$1 = _ref4.errors,
        _maximum = _ref4.type.maximum;
    return value.length > _maximum && errors$$1.add("length must be lower than or equal to ".concat(_maximum, ", ") + "got length equal to ".concat(value.length));
  },
  structure: function structure(validation$$1) {
    var structure = validation$$1.type.structure;
    validation$$1.test("structure".concat(Array.isArray(structure) ? 'Array' : 'Type'));
    if (validation$$1.errors.delegated) validation$$1.errors.prepend('structure is invalid');
  },
  structureArray: function structureArray(_ref5) {
    var value = _ref5.value,
        errors$$1 = _ref5.errors,
        structure = _ref5.type.structure;
    structure.some(function (type$$1, index) {
      return type$$1.validate(value[index]).annotate('index', index).delegate(errors$$1).failed;
    });
  },
  structureType: function structureType(_ref6) {
    var value = _ref6.value,
        errors$$1 = _ref6.errors,
        structure = _ref6.type.structure;
    value.some(function (v, index) {
      return structure.validate(v).annotate('index', index).delegate(errors$$1).failed;
    });
  }
});

module.exports = ArrayType;
