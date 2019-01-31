'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

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
  __chunk_1._inherits(ClassType, _Type);

  function ClassType() {
    var _this;

    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __chunk_1._classCallCheck(this, ClassType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(ClassType).call(this, options));
    if (parent !== null) _this.parent = parent;
    return _this;
  }

  return ClassType;
}(type);

__chunk_1._defineProperty(ClassType, "primitives", ['function']);

__chunk_1._defineProperty(ClassType, "tests", {
  parent: function parent(_ref) {
    var prototype = _ref.value.prototype,
        errors$$1 = _ref.errors,
        _parent = _ref.type.parent;
    prototype instanceof _parent || errors$$1.add("must be a class extending ".concat(_parent));
  }
});

module.exports = ClassType;
