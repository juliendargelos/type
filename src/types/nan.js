import Type from '~/type'

/**
 * Represents a nan (*Not A Number*) type.
 * @class Nan
 * @extends Type
 * @inheritparams
 */
class NanType extends Type {
  static primitives = ['nan']
}

export default NanType
