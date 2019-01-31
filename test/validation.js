import Type from '~'
import Validation from '~/validation'

test('does not throw if no error', () => {
  expect(() => new Validation()
    .throw()
  ).not.toThrow()
})

test('throws if any error', () => {
  expect(() => new Validation()
    .continue(({errors}) => errors.add('foo'))
    .throw()
  ).toThrow({message: 'Invalid value null: foo.'})
})

test('returns an invalid string if failed', () => {
  expect(new Validation()
    .continue(({errors}) => errors.add('foo'))
    .toString()
  ).toMatch('Invalid')
})

test('returns a valid string if succeed', () => {
  expect(new Validation().toString()).toMatch('Valid')
})

test('returns an annotated string with if any annotation', () => {
  expect(new Validation()
    .annotate('foo', 'bar')
    .toString()
  ).toMatch('[foo: bar]')
})

test('does not continue if failed', () => {
  const callback = jest.fn()
  new Validation()
    .continue(({errors}) => errors.add('foo'))
    .continue(callback)

  expect(callback).not.toBeCalled()
})

test('does test if type provided', () => {
  class CustomType extends Type {
    static tests = {foo: jest.fn()}
  }

  new Validation(new CustomType()).test('foo')
  expect(CustomType.tests.foo).toBeCalled()
})

test('does not throw when testing without type', () => {
  expect(() => new Validation().test('foo')).not.toThrow()
})

test('string includes type name if provided', () => {
  expect(new Validation(Type.any).toString()).toMatch('Any(optional: true)')
})
