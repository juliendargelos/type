import Type from '~'

test('null is invalid',      () => expect(Type.undefined.valid(null)).toBe(false))
test('undefined is valid',   () => expect(Type.undefined.valid(undefined)).toBe(true))
test('nan is invalid',       () => expect(Type.undefined.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.undefined.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.undefined.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.undefined.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.undefined.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.undefined.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.undefined.valid(() => {})).toBe(false))