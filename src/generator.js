class Generator {
  constructor(type) {
    const instance = new type()
    const generator = (...args) => new type(...args)
    delete generator.length
    delete generator.name
    return Object.setPrototypeOf(Object.defineProperties(
      generator,
      {
        ...Object.getOwnPropertyDescriptors(instance),
        toString: {value: () => instance.toString()}
      }
    ), type.prototype)
  }
}

export default Generator
