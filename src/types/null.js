import Type from '~/type'

/**
 * Represents a null type.
 * @class Null
 * @memberof Type
 * @extends Type
 * @inheritparams
 */
class NullType extends Type {
  static primitives = ['null']
}

export default NullType
