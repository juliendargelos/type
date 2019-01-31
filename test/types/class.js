import Type from '~'

class Foo {}
class Parent {}
class Child extends Parent {}

test('null is invalid',      () => expect(Type.class.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.class.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.class.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.class.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.class.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.class.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.class.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.class.valid({})).toBe(false))
test('function is valid',    () => expect(Type.class.valid(() => {})).toBe(true))

test('only valid if extends parent', () => {
  expect(Type.class(Parent).valid(Child)).toBe(true)
  expect(Type.class(Parent).valid(Foo)).toBe(false)
})
