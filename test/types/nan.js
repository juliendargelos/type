import Type from '~'

test('nan is valid',         () => expect(Type.nan.valid(NaN)).toBe(true))
test('null is invalid',      () => expect(Type.nan.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.nan.valid(undefined)).toBe(false))
test('boolean is invalid',   () => expect(Type.nan.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.nan.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.nan.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.nan.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.nan.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.nan.valid(() => {})).toBe(false))
