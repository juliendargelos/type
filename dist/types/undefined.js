'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents an undefined type.
 * @class Undefined
 * @extends Type
 * @inheritparams
 */

var UndefinedType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(UndefinedType, _Type);

  function UndefinedType() {
    __chunk_1._classCallCheck(this, UndefinedType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(UndefinedType).apply(this, arguments));
  }

  return UndefinedType;
}(type);

__chunk_1._defineProperty(UndefinedType, "primitives", ['undefined']);

module.exports = UndefinedType;
