import './chunk-a3761d77.js';
import './error.mjs';
import './errors.mjs';
import './generator.mjs';
import './utils.mjs';
import './validation.mjs';
import Type from './type.mjs';
import AnyType from './types/any.mjs';
import UndefinedType from './types/undefined.mjs';
import NullType from './types/null.mjs';
import NanType from './types/nan.mjs';
import BooleanType from './types/boolean.mjs';
import NumberType from './types/number.mjs';
import StringType from './types/string.mjs';
import ArrayType from './types/array.mjs';
import ObjectType from './types/object.mjs';
import ValueType from './types/value.mjs';
import MixedType from './types/mixed.mjs';

/**
 * @member {Generator.<Any>} any
 * @memberof Type
 */

/**
 * @member {function} Any
 * @memberof Type
 */

Type.register(AnyType);
/**
 * @member {Generator.<Undefined>} undefined
 * @memberof Type
 */

/**
 * @member {function} Undefined
 * @memberof Type
 */

Type.register(UndefinedType);
/**
 * @member {Generator.<Null>} null
 * @memberof Type
 */

/**
 * @member {function} Null
 * @memberof Type
 */

Type.register(NullType);
/**
 * @member {Generator.<Nan>} nan
 * @memberof Type
 */

/**
 * @member {function} Nan
 * @memberof Type
 */

Type.register(NanType);
/**
 * @member {Generator.<Boolean>} boolean
 * @memberof Type
 */

/**
 * @member {function} Boolean
 * @memberof Type
 */

Type.register(BooleanType);
/**
 * @member {Generator.<Number>} number
 * @memberof Type
 */

/**
 * @member {function} Number
 * @memberof Type
 */

Type.register(NumberType);
/**
 * @member {Generator.<String>} string
 * @memberof Type
 */

/**
 * @member {function} String
 * @memberof Type
 */

Type.register(StringType);
/**
 * @member {Generator.<Array>} array
 * @memberof Type
 */

/**
 * @member {function} Array
 * @memberof Type
 */

Type.register(ArrayType);
/**
 * @member {Generator.<Object>} object
 * @memberof Type
 */

/**
 * @member {function} Object
 * @memberof Type
 */

Type.register(ObjectType);
/**
 * @member {Generator.<Value>} value
 * @memberof Type
 */

/**
 * @member {function} Value
 * @memberof Type
 */

Type.register(ValueType);
/**
 * @member {Generator.<Mixed>} mixed
 * @memberof Type
 */

/**
 * @member {function} Mixed
 * @memberof Type
 */

Type.register(MixedType);

export default Type;
