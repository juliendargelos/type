import Type from '~/type'

export default class AnyType extends Type {
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
