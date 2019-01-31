'use strict';

require('./chunk-0e3b945c.js');
require('./error.js');
require('./errors.js');
require('./generator.js');
require('./utils.js');
require('./validation.js');
var type = require('./type.js');
var any = require('./types/any.js');
var _undefined = require('./types/undefined.js');
var _null = require('./types/null.js');
var nan = require('./types/nan.js');
var boolean = require('./types/boolean.js');
var number = require('./types/number.js');
var string = require('./types/string.js');
var array = require('./types/array.js');
var object = require('./types/object.js');
var value = require('./types/value.js');
var mixed = require('./types/mixed.js');

/**
 * @member {Generator.<Any>} any
 * @memberof Type
 */

/**
 * @member {function} Any
 * @memberof Type
 */

type.register(any);
/**
 * @member {Generator.<Undefined>} undefined
 * @memberof Type
 */

/**
 * @member {function} Undefined
 * @memberof Type
 */

type.register(_undefined);
/**
 * @member {Generator.<Null>} null
 * @memberof Type
 */

/**
 * @member {function} Null
 * @memberof Type
 */

type.register(_null);
/**
 * @member {Generator.<Nan>} nan
 * @memberof Type
 */

/**
 * @member {function} Nan
 * @memberof Type
 */

type.register(nan);
/**
 * @member {Generator.<Boolean>} boolean
 * @memberof Type
 */

/**
 * @member {function} Boolean
 * @memberof Type
 */

type.register(boolean);
/**
 * @member {Generator.<Number>} number
 * @memberof Type
 */

/**
 * @member {function} Number
 * @memberof Type
 */

type.register(number);
/**
 * @member {Generator.<String>} string
 * @memberof Type
 */

/**
 * @member {function} String
 * @memberof Type
 */

type.register(string);
/**
 * @member {Generator.<Array>} array
 * @memberof Type
 */

/**
 * @member {function} Array
 * @memberof Type
 */

type.register(array);
/**
 * @member {Generator.<Object>} object
 * @memberof Type
 */

/**
 * @member {function} Object
 * @memberof Type
 */

type.register(object);
/**
 * @member {Generator.<Value>} value
 * @memberof Type
 */

/**
 * @member {function} Value
 * @memberof Type
 */

type.register(value);
/**
 * @member {Generator.<Mixed>} mixed
 * @memberof Type
 */

/**
 * @member {function} Mixed
 * @memberof Type
 */

type.register(mixed);

module.exports = type;
