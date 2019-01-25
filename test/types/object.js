import Type from '~'

test('null is invalid',      () => expect(Type.object.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.object.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.object.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.object.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.object.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.object.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.object.valid([])).toBe(false))
test('object is valid',      () => expect(Type.object.valid({})).toBe(true))
test('function is invalid',  () => expect(Type.object.valid(() => {})).toBe(false))