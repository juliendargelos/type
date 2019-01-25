import Type from '~'

test('null is invalid',      () => expect(Type.number.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.number.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.number.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.number.valid(false)).toBe(false))
test('number is valid',      () => expect(Type.number.valid(2)).toBe(true))
test('string is invalid',    () => expect(Type.number.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.number.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.number.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.number.valid(() => {})).toBe(false))