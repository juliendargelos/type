class Generator {
  constructor(type) {
    return Object.setPrototypeOf(Object.defineProperties(
      (...args) => new type(...args),
      Object.getOwnPropertyDescriptors(new type())
    ), type.prototype)
  }
}

export default Generator
