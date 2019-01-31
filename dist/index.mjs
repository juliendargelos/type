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
import InstanceType from './types/instance.mjs';
import FunctionType from './types/function.mjs';
import ClassType from './types/class.mjs';
import ValueType from './types/value.mjs';
import MixedType from './types/mixed.mjs';

/**
 * @member {Generator.<Type.Any>} any
 * @memberof Type
 */

Type.register(AnyType);
/**
 * @member {Generator.<Type.Undefined>} undefined
 * @memberof Type
 */

Type.register(UndefinedType);
/**
 * @member {Generator.<Type.Null>} null
 * @memberof Type
 */

Type.register(NullType);
/**
 * @member {Generator.<Type.Nan>} nan
 * @memberof Type
 */

Type.register(NanType);
/**
 * @member {Generator.<Type.Boolean>} boolean
 * @memberof Type
 */

Type.register(BooleanType);
/**
 * @member {Generator.<Type.Number>} number
 * @memberof Type
 */

Type.register(NumberType);
/**
 * @member {Generator.<Type.String>} string
 * @memberof Type
 */

Type.register(StringType);
/**
 * @member {Generator.<Type.Array>} array
 * @memberof Type
 */

Type.register(ArrayType);
/**
 * @member {Generator.<Type.Object>} object
 * @memberof Type
 */

Type.register(ObjectType);
/**
 * @member {Generator.<Type.Instance>} instance
 * @memberof Type
 */

Type.register(InstanceType);
/**
 * @member {Generator.<Type.Function>} function
 * @memberof Type
 */

Type.register(FunctionType);
/**
 * @member {Generator.<Type.Class>} class
 * @memberof Type
 */

Type.register(ClassType);
/**
 * @member {Generator.<Type.Value>} value
 * @memberof Type
 */

Type.register(ValueType);
/**
 * @member {Generator.<Type.Mixed>} mixed
 * @memberof Type
 */

Type.register(MixedType);

export default Type;
