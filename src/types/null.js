import Type from '~/type'

/**
 * Represents a null type.
 * @class Null
 * @memberof Type
 * @extends Type
 * @extends-params
 */
class NullType extends Type {
  static primitives = ['null']
}

export default NullType
