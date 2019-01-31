import Type from '~'

test('adds constructor and generator function when registering type', () => {
  class CustomType extends Type {}
  Type.register(CustomType)
  expect(Type.Custom).toBe(CustomType)
  expect(Type.custom).toBeInstanceOf(CustomType)
  expect(Type.custom()).toBeInstanceOf(CustomType)
})

test('throws when registering invalid type', () => {
  expect(() => Type.register(null)).toThrow()
})

test('string is Type(optional: true)', () => {
  expect(new Type({optional: true}).toString()).toBe('Type(optional: true)')
})
