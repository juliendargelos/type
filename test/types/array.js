import Type from '~'

test('array is valid',       () => expect(Type.array.valid([])).toBe(true))
test('null is invalid',      () => expect(Type.array.valid(null)).toBe(false))
test('undefined is invalid', () => expect(Type.array.valid(undefined)).toBe(false))
test('nan is invalid',       () => expect(Type.array.valid(NaN)).toBe(false))
test('boolean is invalid',   () => expect(Type.array.valid(false)).toBe(false))
test('number is invalid',    () => expect(Type.array.valid(2)).toBe(false))
test('string is invalid',    () => expect(Type.array.valid('')).toBe(false))
test('object is invalid',    () => expect(Type.array.valid({})).toBe(false))
test('function is invalid',  () => expect(Type.array.valid(() => {})).toBe(false))

const length3 = Type.array(null, {length: 3})
test('array of length 3 is valid',  () => expect(length3.valid([1, 2, 3])).toBe(true))
test('array of length 2 is invalid',  () => expect(length3.valid([1, 2])).toBe(false))

const min3 = Type.array(null, {minimum: 3})
test('array of length 4 is valid',  () => expect(min3.valid([1, 2, 3, 4])).toBe(true))
test('array of length 2 is invalid',  () => expect(min3.valid([1, 2])).toBe(false))

const max3 = Type.array(null, {maximum: 3})
test('array of length 2 is valid',  () => expect(max3.valid([1, 2])).toBe(true))
test('array of length 4 is invalid',  () => expect(max3.valid([1, 2, 3, 4])).toBe(false))

const numberArray = Type.array(Type.number)
test('empty array is valid', () => expect(numberArray.valid([])).toBe(true))
test('int array is valid', () => expect(numberArray.valid([1, 2, 3])).toBe(true))
test('not int array is invalid', () => expect(numberArray.valid(['foo'])).toBe(false))

const anyNaNArray = Type.array([Type.any, Type.nan])
test('[any, nan] array is valid', () => expect(anyNaNArray.valid([2, NaN])).toBe(true))
test('empty array is invalid', () => expect(anyNaNArray.valid([])).toBe(false))
test('not [any, nan] array is invalid', () => expect(anyNaNArray.valid([0])).toBe(false))
