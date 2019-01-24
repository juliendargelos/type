import Validation from '~/validation'

export default class Type {
  constructor({optional = false} = {}) {
    if(optional) this.optional = true
  }

  static primitives = []
  static base = null

  static get generator() {
    return Object.assign((...args) => new this(...args), {
      validate: this.validate.bind(this),
      toString: this.toString.bind(this)
    })
  }

  static register(type) {
    if(typeof type !== 'function' || !(type.prototype instanceof Type)) {
      throw 'Can only register classes extending Type.'
    }

    const name = type.toString()

    this[name] = type
    this[name[0].toLowerCase() + name.substring(1)] = type.generator
  }

  static validate(value) {
    return (this.base || (this.base = new this())).validate(value)
  }

  static valid(value) {
    return this.validate(value).succeed
  }

  static toString() {
    const i = this.name.length - 4
    if(this !== Type && this.name.substring(i) === 'Type') return this.name.substring(0, i)
    return this.name
  }

  static primitive(value) {
    if(value === null) return 'null'
    if(typeof value === 'number' && isNaN(value)) return 'nan'
    if(Array.isArray(value)) return 'array'
    return typeof value
  }

  get options() {
    const options = Object.entries(this)
    if(!options.length) return ''
    return `(${options.map(([key, value]) => {
      if(Array.isArray(value)) {
        value = `[${value.join(', ')}]`
      } else if(value !== null && typeof value === 'object') {
        value = `{${Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ')}}`
      }
      return `${key}: ${value}`
    }).join(', ')})`
  }

  validate(value) {
    return new Validation(this, value).continue(validation => {
      if(this.optional && (value === null || value === undefined)) {
        return validation.cancel()
      }

      const primitives = this.constructor.primitives
      const primitive = this.constructor.primitive(value)

      if(primitives.length && !primitives.includes(primitive)) {
        validation.errors.add(`type must be ${primitives.join(', ')}, got ${primitive}`)
      }
    })
  }

  valid(value) {
    return this.validation(value).succeed
  }

  toString() {
    return `${this.constructor}${this.options}`
  }
}
