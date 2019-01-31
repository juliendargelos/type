import Type from '~'

test('null is invalid',      () => expect(Type.function.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.function.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.function.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.function.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.function.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.function.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.function.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.function.valid({})).toBe(false))
test('function is valid',    () => expect(Type.function.valid(() => {})).toBe(true))
