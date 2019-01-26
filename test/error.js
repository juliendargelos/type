import Error from '~/error'

test('exception is a TypeError', () => {
  expect(new Error().exception).toBeInstanceOf(TypeError)
})

test('Error for an Error is itself', () => {
  const error = new Error()
  expect(Error.for(error)).toBe(error)
})

test('Error for a string is a new Error', () => {
  expect(Error.for('foo')).toBeInstanceOf(Error)
})

test('uses captureStackTrace if available', () => {
  TypeError.captureStackTrace = jest.fn()
  Error.exception('foo')
  expect(TypeError.captureStackTrace).toBeCalled()
})

test('does not use captureStackTrace if unvailable', () => {
  TypeError.captureStackTrace = null
  expect(() => Error.exception('foo')).not.toThrow()
})
