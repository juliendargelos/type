import Type from '~'

test('null is invalid',      () => expect(Type.array.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.array.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.array.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.array.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.array.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.array.valid('')).toBe(false))
test('array is valid',       () => expect(Type.array.valid([])).toBe(true))
test('object is invalid',    () => expect(Type.array.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.array.valid(() => {})).toBe(false))