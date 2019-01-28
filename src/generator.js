import Type from '~/type'

class Generator extends Type {
  constructor(type) {
    return Object.defineProperties((...args) => new type(...args), {
      ...Generator.descriptors,
      constructor: {value: type},
      type: {value: new type()}
    })
  }

  static descriptors = Object.getOwnPropertyDescriptors(Generator.prototype)

  validate(value) {
    return this.type.validate(value)
  }

  valid(value) {
    return this.type.valid(value)
  }

  toString() {
    return this.type.toString()
  }
}

export function of(type) {
  return new Generator(type)
}

export default Generator
