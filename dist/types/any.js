'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents any type.
 * @class Any
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var AnyType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(AnyType, _Type);

  function AnyType() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$optional = _ref.optional,
        optional = _ref$optional === void 0 ? true : _ref$optional;

    __chunk_1._classCallCheck(this, AnyType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(AnyType).call(this, {
      optional: optional
    }));
  }

  return AnyType;
}(type);

__chunk_1._defineProperty(AnyType, "primitives", ['nan', 'boolean', 'number', 'string', 'array', 'object', 'function']);

module.exports = AnyType;
