import Type from '~'

const finite = Type.number({finite: true})
test('2 is valid',  () => expect(finite.valid(2)).toBe(true))
test('Infinity is invalid',  () => expect(finite.valid(Infinity)).toBe(false))
test('-Infinity is invalid',  () => expect(finite.valid(-Infinity)).toBe(false))

const infinite = Type.number({finite: false})
test('Infinity is valid',  () => expect(infinite.valid(Infinity)).toBe(true))
test('-Infinity is valid',  () => expect(infinite.valid(-Infinity)).toBe(true))
test('2 is invalid',  () => expect(infinite.valid(2)).toBe(false))

const integer = Type.number({integer: true})
test('2 is valid',  () => expect(integer.valid(2)).toBe(true))
test('2.1 is invalid',  () => expect(integer.valid(2.1)).toBe(false))

const min3 = Type.number({minimum: 3})
test('4 is valid',  () => expect(min3.valid(4)).toBe(true))
test('2 is invalid',  () => expect(min3.valid(2)).toBe(false))

const min3Excluded = Type.number({minimum: 3, exclude: true})
test('4 is valid',  () => expect(min3Excluded.valid(4)).toBe(true))
test('3 is invalid',  () => expect(min3Excluded.valid(3)).toBe(false))

const min3MinExcluded = Type.number({minimum: 3, exclude: {minimum: true}})
test('4 is valid',  () => expect(min3MinExcluded.valid(4)).toBe(true))
test('3 is invalid',  () => expect(min3MinExcluded.valid(3)).toBe(false))

const max3 = Type.number({maximum: 3})
test('2 is valid',  () => expect(max3.valid(2)).toBe(true))
test('4 is invalid',  () => expect(max3.valid(4)).toBe(false))

const max3Excluded = Type.number({maximum: 3, exclude: true})
test('2 is valid',  () => expect(max3Excluded.valid(2)).toBe(true))
test('3 is invalid',  () => expect(max3Excluded.valid(3)).toBe(false))

const max3MaxExcluded = Type.number({maximum: 3, exclude: {maximum: true}})
test('2 is valid',  () => expect(max3MaxExcluded.valid(2)).toBe(true))
test('3 is invalid',  () => expect(max3MaxExcluded.valid(3)).toBe(false))
