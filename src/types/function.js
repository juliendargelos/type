import Type from '~/type'

/**
 * Represents a function type.
 * @class Function
 * @memberof Type
 * @extends Type
 * @inheritparams
 */
class FunctionType extends Type {
  static primitives = ['function']
}

export default FunctionType
