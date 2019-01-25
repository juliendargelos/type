import Type from '~'

test('null is valid',      () => expect(Type.any.valid(null)).toBe(true))
test('undefined is valid', () => expect(Type.any.valid(undefined)).toBe(true))
test('nan is valid',       () => expect(Type.any.valid(NaN)).toBe(true))
test('boolean is valid',   () => expect(Type.any.valid(false)).toBe(true))
test('number is valid',    () => expect(Type.any.valid(2)).toBe(true))
test('string is valid',    () => expect(Type.any.valid('')).toBe(true))
test('array is valid',     () => expect(Type.any.valid([])).toBe(true))
test('object is valid',    () => expect(Type.any.valid({})).toBe(true))
test('function is valid',  () => expect(Type.any.valid(() => {})).toBe(true))
