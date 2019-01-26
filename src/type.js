import Validation from '~/validation'

export default class Type {
  constructor({optional = false} = {}) {
    if(optional) this.optional = true
  }

  static base = null
  static primitives = []
  static tests = {}
  static all = []

  static get generator() {
    return Object.assign((...args) => new this(...args), {
      validate: this.validate.bind(this),
      valid: this.valid.bind(this),
      toString: this.toString.bind(this)
    })
  }

  static register(type) {
    if(typeof type !== 'function' || !(type.prototype instanceof Type)) {
      throw 'Can only register classes extending Type.'
    }

    const name = type.toString()
    this.all.push(type)
    this[name] = type
    this[name[0].toLowerCase() + name.substring(1)] = type.generator
  }

  static primitive(value) {
    if(value === null) return 'null'
    if(typeof value === 'number' && isNaN(value)) return 'nan'
    if(Array.isArray(value)) return 'array'
    return typeof value
  }

  static stringify(value) {
    switch(this.primitive(value)) {
      case 'object':
        return `{${
          Object.entries(value).map(([k, v]) => `${k}: ${this.stringify(v)}`).join(', ')
        }}`
      case 'array':
        return `[${
          value.map(v => this.stringify(v)).join(', ')
        }]`
      case 'string':
        return `'${value}'`
      default:
        return `${value}`
    }
  }

  static validate(value) {
    return (this.base || (this.base = new this())).validate(value)
  }

  static valid(value) {
    return this.validate(value).succeed
  }

  static toString() {
    const i = this.name.length - 4
    const name = this.name
    return this !== Type && name.substring(i) === 'Type' ? name.substring(0, i) : name
  }

  validate(value) {
    return new Validation(this, value).continue(validation => {
      if(this.optional && (value === null || value === undefined)) {
        return validation.cancel()
      }

      const primitives = this.constructor.primitives
      const primitive = this.constructor.primitive(value)
      if(primitives.length && !primitives.includes(primitive)) {
        return validation.errors.add(
          `primitive type must be ${primitives.join(', ')}, got ${primitive}`
        )
      }

      Object.keys(this.constructor.tests).forEach(test => {
        if(test in this) validation.test(test, this)
      })
    })
  }

  valid(value) {
    return this.validate(value).succeed
  }

  toString() {
    const options = Object.values(this).length
      ? `(${this.constructor.stringify(this).slice(1, -1)})`
      : ''
    return `${this.constructor}${options}`
  }
}
