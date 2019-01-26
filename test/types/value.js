import Type from '~'

test('null is valid', () => expect(Type.value.valid(null)).toBe(true))

const digit = Type.value({only: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]})
test('0 is valid',           () => expect(digit.valid(0)).toBe(true))
test('1 is valid',           () => expect(digit.valid(1)).toBe(true))
test('2 is valid',           () => expect(digit.valid(2)).toBe(true))
test('3 is valid',           () => expect(digit.valid(3)).toBe(true))
test('4 is valid',           () => expect(digit.valid(4)).toBe(true))
test('5 is valid',           () => expect(digit.valid(5)).toBe(true))
test('6 is valid',           () => expect(digit.valid(6)).toBe(true))
test('7 is valid',           () => expect(digit.valid(7)).toBe(true))
test('8 is valid',           () => expect(digit.valid(8)).toBe(true))
test('9 is valid',           () => expect(digit.valid(9)).toBe(true))
test('0.1 is invalid',       () => expect(digit.valid(0.1)).toBe(false))
test('11 is invalid',        () => expect(digit.valid(11)).toBe(false))
test('-1 is invalid',        () => expect(digit.valid(-1)).toBe(false))
test('null is invalid',      () => expect(digit.valid(null)).toBe(false))
test('undefined is invalid', () => expect(digit.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(digit.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(digit.valid(false)).toBe(false))
test('string is invalid',    () => expect(digit.valid('')).toBe(false))
test('array is invalid',     () => expect(digit.valid([])).toBe(false))
test('object is invalid',    () => expect(digit.valid({})).toBe(false))
test('function is invalid',  () => expect(digit.valid(() => {})).toBe(false))

const foo = Type.value({only: 'foo'})
test('foo is valid',  () => expect(foo.valid('foo')).toBe(true))
test('bar is invalid',  () => expect(foo.valid('bar')).toBe(false))

const notBlank = Type.value({except: [undefined, null, false, '']})
test('not empty string is valid', () => expect(notBlank.valid('foo')).toBe(true))
test('array is valid',            () => expect(notBlank.valid([])).toBe(true))
test('object is valid',           () => expect(notBlank.valid({})).toBe(true))
test('function is valid',         () => expect(notBlank.valid(() => {})).toBe(true))
test('nan is valid',              () => expect(notBlank.valid(NaN)).toBe(true))
test('true is valid',             () => expect(notBlank.valid(true)).toBe(true))
test('null is invalid',           () => expect(notBlank.valid(null)).toBe(false))
test('undefined is invalid',      () => expect(notBlank.valid(undefined)).toBe(false))
test('false is invalid',          () => expect(notBlank.valid(false)).toBe(false))
test('empty string is invalid',   () => expect(notBlank.valid('')).toBe(false))

const notBar = Type.value({except: 'bar'})
test('foo is valid',  () => expect(notBar.valid('foo')).toBe(true))
test('bar is invalid',  () => expect(notBar.valid('bar')).toBe(false))
