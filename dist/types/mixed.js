'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
var errors = require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a mixed type.
 * @class Mixed
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var MixedType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(MixedType, _Type);

  function MixedType() {
    var _this;

    __chunk_1._classCallCheck(this, MixedType);

    _this = __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(MixedType).call(this));

    for (var _len = arguments.length, types = new Array(_len), _key = 0; _key < _len; _key++) {
      types[_key] = arguments[_key];
    }

    _this.types = types;
    return _this;
  }

  return MixedType;
}(type);

__chunk_1._defineProperty(MixedType, "tests", {
  types: function types(_ref) {
    var value = _ref.value,
        errors$$1 = _ref.errors,
        _types = _ref.type.types;
    var typeErrors = new errors();

    var failed = _types.every(function (type$$1) {
      return type$$1.validate(value).delegate(typeErrors).failed;
    });

    if (failed) errors$$1.add.apply(errors$$1, ["type must be one of ".concat(_types.join(', '))].concat(__chunk_1._toConsumableArray(typeErrors)));
  }
});

module.exports = MixedType;
