import Type from '~'

const numberOrString = Type.mixed(Type.number, Type.string)
test('null is invalid',      () => expect(numberOrString.valid(null)).toBe(false))
test('undefined is invalid', () => expect(numberOrString.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(numberOrString.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(numberOrString.valid(false)).toBe(false))
test('number is valid',      () => expect(numberOrString.valid(2)).toBe(true))
test('string is valid',      () => expect(numberOrString.valid('')).toBe(true))
test('array is invalid',     () => expect(numberOrString.valid([])).toBe(false))
test('object is invalid',    () => expect(numberOrString.valid({})).toBe(false))
test('function is invalid',  () => expect(numberOrString.valid(() => {})).toBe(false))