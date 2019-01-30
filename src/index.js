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
 * @member {function} Any
 * @memberof Type
 */
Type.register(AnyType)

/**
 * @member {Generator.<Undefined>} undefined
 * @memberof Type
 */
/**
 * @member {function} Undefined
 * @memberof Type
 */
Type.register(UndefinedType)

/**
 * @member {Generator.<Null>} null
 * @memberof Type
 */
/**
 * @member {function} Null
 * @memberof Type
 */
Type.register(NullType)

/**
 * @member {Generator.<Nan>} nan
 * @memberof Type
 */
/**
 * @member {function} Nan
 * @memberof Type
 */
Type.register(NanType)

/**
 * @member {Generator.<Boolean>} boolean
 * @memberof Type
 */
/**
 * @member {function} Boolean
 * @memberof Type
 */
Type.register(BooleanType)

/**
 * @member {Generator.<Number>} number
 * @memberof Type
 */
/**
 * @member {function} Number
 * @memberof Type
 */
Type.register(NumberType)

/**
 * @member {Generator.<String>} string
 * @memberof Type
 */
/**
 * @member {function} String
 * @memberof Type
 */
Type.register(StringType)

/**
 * @member {Generator.<Array>} array
 * @memberof Type
 */
/**
 * @member {function} Array
 * @memberof Type
 */
Type.register(ArrayType)

/**
 * @member {Generator.<Object>} object
 * @memberof Type
 */
/**
 * @member {function} Object
 * @memberof Type
 */
Type.register(ObjectType)

/**
 * @member {Generator.<Value>} value
 * @memberof Type
 */
/**
 * @member {function} Value
 * @memberof Type
 */
Type.register(ValueType)

/**
 * @member {Generator.<Mixed>} mixed
 * @memberof Type
 */
/**
 * @member {function} Mixed
 * @memberof Type
 */
Type.register(MixedType)


export default Type
