'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents an object type.
 * @class Object
 * @extends Type
 * @inheritparams
 */

var ObjectType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(ObjectType, _Type);

  function ObjectType() {
    var _this;

    var structure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __chunk_1._classCallCheck(this, ObjectType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(ObjectType).call(this, options));
    if (structure !== null) _this.structure = structure;
    return _this;
  }

  return ObjectType;
}(type);

__chunk_1._defineProperty(ObjectType, "primitives", ['object']);

__chunk_1._defineProperty(ObjectType, "tests", {
  structure: function structure(_ref) {
    var value = _ref.value,
        errors$$1 = _ref.errors,
        _structure = _ref.type.structure;
    Object.entries(_structure).some(function (_ref2) {
      var _ref3 = __chunk_1._slicedToArray(_ref2, 2),
          attribute = _ref3[0],
          type$$1 = _ref3[1];

      return type$$1.validate(value[attribute]).annotate('attribute', attribute).delegate(errors$$1).failed;
    });
    if (errors$$1.delegated) errors$$1.prepend('structure is invalid');
  }
});

module.exports = ObjectType;
