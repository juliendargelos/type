import Type from '~/type'

/**
 * Represents any type.
 * @class Any
 * @memberof Type
 * @extends Type
 * @inheritparams
 */
class AnyType extends Type {
  constructor({optional = true} = {}) {
    super({optional})
  }

  static primitives = [
    'nan',
    'boolean',
    'number',
    'string',
    'array',
    'object',
    'function'
  ]
}

export default AnyType
