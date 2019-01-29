import Type from '~/type'

/**
 * Represents an undefined type.
 * @class Undefined
 * @memberof Type
 * @extends Type
 * @extends-params
 */
class UndefinedType extends Type {
  static primitives = ['undefined']
}

export default UndefinedType
