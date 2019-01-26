import Type from '~'

test('string is valid',      () => expect(Type.string.valid('')).toBe(true))
test('null is invalid',      () => expect(Type.string.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.string.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.string.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.string.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.string.valid(2)).toBe(false))
test('array is invalid',     () => expect(Type.string.valid([])).toBe(false))
test('object is invalid',    () => expect(Type.string.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.string.valid(() => {})).toBe(false))

const length3 = Type.string({length: 3})
test('string of length 3 is valid',  () => expect(length3.valid('abc')).toBe(true))
test('string of length 2 is invalid',  () => expect(length3.valid('ab')).toBe(false))

const min3 = Type.string({minimum: 3})
test('string of length 4 is valid',  () => expect(min3.valid('abcd')).toBe(true))
test('string of length 2 is invalid',  () => expect(min3.valid('ab')).toBe(false))

const max3 = Type.string({maximum: 3})
test('string of length 2 is valid',  () => expect(max3.valid('ab')).toBe(true))
test('string of length 4 is invalid',  () => expect(max3.valid('abcd')).toBe(false))

const onlyAb = Type.string({only: 'ab'})
test('abab is valid',  () => expect(onlyAb.valid('abab')).toBe(true))
test('abcd is invalid',  () => expect(onlyAb.valid('abcd')).toBe(false))

const exceptAb = Type.string({except: 'ab'})
test('cdcd is valid',  () => expect(exceptAb.valid('cdcd')).toBe(true))
test('abcd is invalid',  () => expect(exceptAb.valid('abcd')).toBe(false))

const digitsOrLetters = Type.string({pattern: /^[0-9a-z]*$/})
test('ab01 is valid',  () => expect(digitsOrLetters.valid('ab01')).toBe(true))
test('ab_1 is invalid',  () => expect(digitsOrLetters.valid('ab_1')).toBe(false))
