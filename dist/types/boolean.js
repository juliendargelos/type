'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a boolean type.
 * @class Boolean
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var BooleanType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(BooleanType, _Type);

  function BooleanType() {
    __chunk_1._classCallCheck(this, BooleanType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(BooleanType).apply(this, arguments));
  }

  return BooleanType;
}(type);

__chunk_1._defineProperty(BooleanType, "primitives", ['boolean']);

module.exports = BooleanType;
