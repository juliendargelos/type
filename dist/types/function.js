'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a function type.
 * @class Function
 * @memberof Type
 * @extends Type
 * @inheritparams
 */

var FunctionType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(FunctionType, _Type);

  function FunctionType() {
    __chunk_1._classCallCheck(this, FunctionType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(FunctionType).apply(this, arguments));
  }

  return FunctionType;
}(type);

__chunk_1._defineProperty(FunctionType, "primitives", ['function']);

module.exports = FunctionType;
