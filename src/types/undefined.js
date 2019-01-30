import Type from '~/type'

/**
 * Represents an undefined type.
 * @class Undefined
 * @extends Type
 * @inheritparams
 */
class UndefinedType extends Type {
  static primitives = ['undefined']
}

export default UndefinedType
