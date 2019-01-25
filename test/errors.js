import Errors from '~/errors'

test('exception is a TypeError', () => {
  expect(new Errors().exception).toBeInstanceOf(TypeError)
})
