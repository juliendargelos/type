import Type from '~/type'

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
