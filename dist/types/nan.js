'use strict';

var __chunk_1 = require('../chunk-0e3b945c.js');
require('../error.js');
require('../errors.js');
require('../generator.js');
require('../utils.js');
require('../validation.js');
var type = require('../type.js');

/**
 * Represents a nan (*Not A Number*) type.
 * @class Nan
 * @extends Type
 * @inheritparams
 */

var NanType =
/*#__PURE__*/
function (_Type) {
  __chunk_1._inherits(NanType, _Type);

  function NanType() {
    __chunk_1._classCallCheck(this, NanType);

    return __chunk_1._possibleConstructorReturn(this, __chunk_1._getPrototypeOf(NanType).apply(this, arguments));
  }

  return NanType;
}(type);

__chunk_1._defineProperty(NanType, "primitives", ['nan']);

module.exports = NanType;
