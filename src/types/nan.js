import Type from '~/type'

/**
 * Represents a nan (*Not A Number*) type.
 * @class NaN
 * @memberof Type
 * @extends Type
 * @extendsparams
 */
class NanType extends Type {
  static primitives = ['nan']
}

export default NanType
