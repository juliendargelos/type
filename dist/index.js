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
var instance = require('./types/instance.js');
var _function = require('./types/function.js');
var _class = require('./types/class.js');
var value = require('./types/value.js');
var mixed = require('./types/mixed.js');

/**
 * @member {Generator.<Type.Any>} any
 * @memberof Type
 */

type.register(any);
/**
 * @member {Generator.<Type.Undefined>} undefined
 * @memberof Type
 */

type.register(_undefined);
/**
 * @member {Generator.<Type.Null>} null
 * @memberof Type
 */

type.register(_null);
/**
 * @member {Generator.<Type.Nan>} nan
 * @memberof Type
 */

type.register(nan);
/**
 * @member {Generator.<Type.Boolean>} boolean
 * @memberof Type
 */

type.register(boolean);
/**
 * @member {Generator.<Type.Number>} number
 * @memberof Type
 */

type.register(number);
/**
 * @member {Generator.<Type.String>} string
 * @memberof Type
 */

type.register(string);
/**
 * @member {Generator.<Type.Array>} array
 * @memberof Type
 */

type.register(array);
/**
 * @member {Generator.<Type.Object>} object
 * @memberof Type
 */

type.register(object);
/**
 * @member {Generator.<Type.Instance>} instance
 * @memberof Type
 */

type.register(instance);
/**
 * @member {Generator.<Type.Function>} function
 * @memberof Type
 */

type.register(_function);
/**
 * @member {Generator.<Type.Class>} class
 * @memberof Type
 */

type.register(_class);
/**
 * @member {Generator.<Type.Value>} value
 * @memberof Type
 */

type.register(value);
/**
 * @member {Generator.<Type.Mixed>} mixed
 * @memberof Type
 */

type.register(mixed);

module.exports = type;
