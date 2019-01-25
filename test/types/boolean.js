import Type from '~'

test('null is invalid',      () => expect(Type.boolean.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.boolean.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.boolean.valid(NaN)).toBe(false))
test('boolean is valid',     () => expect(Type.boolean.valid(false)).toBe(true))
test('number is invalid',    () => expect(Type.boolean.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.boolean.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.boolean.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.boolean.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.boolean.valid(() => {})).toBe(false))