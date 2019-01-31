import Type from '~'

class Foo {}

test('null is invalid',      () => expect(Type.instance.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.instance.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.instance.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.instance.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.instance.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.instance.valid('')).toBe(false))
test('array is valid',       () => expect(Type.instance.valid([])).toBe(true))
test('object is valid',      () => expect(Type.instance.valid({})).toBe(true))
test('function is valid',    () => expect(Type.instance.valid(() => {})).toBe(true))

test('only valid if instance of Foo', () => {
  expect(Type.instance(Foo).valid(new Foo())).toBe(true)
  expect(Type.instance(Foo).valid({})).toBe(false)
})
