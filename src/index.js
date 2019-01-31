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
import ValueType from '~/types/value'
import MixedType from '~/types/mixed'

/**
 * @member {Generator.<Any>} any
 * @memberof Type
 */
/**
 * @class Any
 * @memberof Type
 */
Type.register(AnyType)

/**
 * @member {Generator.<Undefined>} undefined
 * @memberof Type
 */
/**
 * @class Undefined
 * @memberof Type
 */
Type.register(UndefinedType)

/**
 * @member {Generator.<Null>} null
 * @memberof Type
 */
/**
 * @class Null
 * @memberof Type
 */
Type.register(NullType)

/**
 * @member {Generator.<Nan>} nan
 * @memberof Type
 */
/**
 * @class Nan
 * @memberof Type
 */
Type.register(NanType)

/**
 * @member {Generator.<Boolean>} boolean
 * @memberof Type
 */
/**
 * @class Boolean
 * @memberof Type
 */
Type.register(BooleanType)

/**
 * @member {Generator.<Number>} number
 * @memberof Type
 */
/**
 * @class Number
 * @memberof Type
 */
Type.register(NumberType)

/**
 * @member {Generator.<String>} string
 * @memberof Type
 */
/**
 * @class String
 * @memberof Type
 */
Type.register(StringType)

/**
 * @member {Generator.<Array>} array
 * @memberof Type
 */
/**
 * @class Array
 * @memberof Type
 */
Type.register(ArrayType)

/**
 * @member {Generator.<Object>} object
 * @memberof Type
 */
/**
 * @class Object
 * @memberof Type
 */
Type.register(ObjectType)

/**
 * @member {Generator.<Value>} value
 * @memberof Type
 */
/**
 * @class Value
 * @memberof Type
 */
Type.register(ValueType)

/**
 * @member {Generator.<Mixed>} mixed
 * @memberof Type
 */
/**
 * @class Mixed
 * @memberof Type
 */
Type.register(MixedType)


export default Type
