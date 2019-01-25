import Type from '~'

test('null is valid',        () => expect(Type.null.valid(null)).toBe(true))
test('undefined is invalid', () => expect(Type.null.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.null.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.null.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.null.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.null.valid('')).toBe(false))
test('array is invalid',     () => expect(Type.null.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.null.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.null.valid(() => {})).toBe(false))