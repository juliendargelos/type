'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a null type.
 * @class Null
 * @extends Type
 * @inheritparams
 */

var NullType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(NullType, _Type);

  function NullType() {
    __chunk_1._classCallCheck(this, NullType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(NullType).apply(this, arguments));
  }

  return NullType;
}(type);

__chunk_1._defineProperty(NullType, "primitives", ['null']);

module.exports = NullType;
