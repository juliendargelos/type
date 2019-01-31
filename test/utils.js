import * as utils from '~/utils'

test('correct primitives', () => {
  expect(utils.primitive(undefined)).toBe('undefined')
  expect(utils.primitive(null)).toBe('null')
  expect(utils.primitive(NaN)).toBe('nan')
  expect(utils.primitive(false)).toBe('boolean')
  expect(utils.primitive(0)).toBe('number')
  expect(utils.primitive(Infinity)).toBe('number')
  expect(utils.primitive('foo')).toBe('string')
  expect(utils.primitive([])).toBe('array')
  expect(utils.primitive({})).toBe('object')
  expect(utils.primitive(() => {})).toBe('function')
})

test('stringifies', () => {
  expect(utils.stringify({
    foo: 'bar',
    bar: [{bar: 'foo'}, null, Infinity, NaN, () => {}],
  })).toBe("{foo: 'bar', bar: [{bar: 'foo'}, null, Infinity, NaN, function () {}]}")
})

test('stringify stops if depth greather than or equal to 10', () => {
  expect(
    utils.stringify({o: {o: {o: {o: {o: {o: {o: {o: {o: {o: {o: 's'}}}}}}}}}}})
  ).toBe(
    '{o: {o: {o: {o: {o: {o: {o: {o: {o: {o: object}}}}}}}}}}'
  )
})
