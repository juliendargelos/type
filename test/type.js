import Type from '~'

test('adds constructor and generator function when registering type', () => {
  class CustomType extends Type {}
  Type.register(CustomType)
  expect(Type.Custom).toBe(CustomType)
  expect(Type.custom).toBeInstanceOf(Function)
})

test('throws when registering invalid type', () => {
  expect(() => Type.register(null)).toThrow()
})

test('stringifies', () => {
  expect(Type.stringify({
    foo: 'bar',
    bar: [{bar: 'foo'}, null, Infinity, NaN, () => {}],
  })).toBe("{foo: 'bar', bar: [{bar: 'foo'}, null, Infinity, NaN, function () {}]}")
})

test('string is Type(optional: true)', () => {
  expect(new Type({optional: true}).toString()).toBe('Type(optional: true)')
})
