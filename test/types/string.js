import Type from '~'

test('null is invalid',      () => expect(Type.string.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.string.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.string.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.string.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.string.valid(2)).toBe(false))
test('string is valid',      () => expect(Type.string.valid('')).toBe(true))
test('array is invalid',     () => expect(Type.string.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.string.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.string.valid(() => {})).toBe(false))