'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a class instance type.
 * @class Instance
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {function?} [klass=null] If provided, type will only validate values that are instances of `klass`.
 */

var InstanceType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(InstanceType, _Type);

  function InstanceType() {
    var _this;

    var klass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    __chunk_1._classCallCheck(this, InstanceType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(InstanceType).call(this, options));
    if (klass !== null) _this.klass = klass;
    return _this;
  }

  return InstanceType;
}(type);

__chunk_1._defineProperty(InstanceType, "primitives", ['array', 'object', 'function']);

__chunk_1._defineProperty(InstanceType, "tests", {
  klass: function klass(_ref) {
    var value = _ref.value,
        errors$$1 = _ref.errors,
        _klass = _ref.type.klass;
    value instanceof _klass || errors$$1.add("must be an instance of ".concat(_klass));
  }
});

module.exports = InstanceType;
