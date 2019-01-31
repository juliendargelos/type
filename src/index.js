import Type from '~/type'
import AnyType from '~/types/any'
import UndefinedType from '~/types/undefined'
import NullType from '~/types/null'
import NanType from '~/types/nan'
import BooleanType from '~/types/boolean'
import NumberType from '~/types/number'
import StringType from '~/types/string'
import ArrayType from '~/types/array'
import ObjectType from '~/types/object'
import InstanceType from '~/types/instance'
import FunctionType from '~/types/function'
import ClassType from '~/types/class'
import ValueType from '~/types/value'
import MixedType from '~/types/mixed'

/**
 * @member {Generator.<Type.Any>} any
 * @memberof Type
 */
Type.register(AnyType)

/**
 * @member {Generator.<Type.Undefined>} undefined
 * @memberof Type
 */
Type.register(UndefinedType)

/**
 * @member {Generator.<Type.Null>} null
 * @memberof Type
 */
Type.register(NullType)

/**
 * @member {Generator.<Type.Nan>} nan
 * @memberof Type
 */
Type.register(NanType)

/**
 * @member {Generator.<Type.Boolean>} boolean
 * @memberof Type
 */
Type.register(BooleanType)

/**
 * @member {Generator.<Type.Number>} number
 * @memberof Type
 */
Type.register(NumberType)

/**
 * @member {Generator.<Type.String>} string
 * @memberof Type
 */
Type.register(StringType)

/**
 * @member {Generator.<Type.Array>} array
 * @memberof Type
 */
Type.register(ArrayType)

/**
 * @member {Generator.<Type.Object>} object
 * @memberof Type
 */
Type.register(ObjectType)

/**
 * @member {Generator.<Type.Instance>} instance
 * @memberof Type
 */
Type.register(InstanceType)

/**
 * @member {Generator.<Type.Function>} function
 * @memberof Type
 */
Type.register(FunctionType)

/**
 * @member {Generator.<Type.Class>} class
 * @memberof Type
 */
Type.register(ClassType)

/**
 * @member {Generator.<Type.Value>} value
 * @memberof Type
 */
Type.register(ValueType)

/**
 * @member {Generator.<Type.Mixed>} mixed
 * @memberof Type
 */
Type.register(MixedType)

export default Type
