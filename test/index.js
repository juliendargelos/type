import Type from '~'

Type.boolean.valid(true)

const type = Type.object({
  title: Type.string({minimum: 5, maximum: 10}),
  content: Type.string,
  timestamp: Type.number({optional: true}),
  authors: Type.array(Type.string, {minimum: 1}),
  category: Type.oneOf(Type.string, Type.object)
})

type.validate({
  title: 'Hello',
  content: 'blablou',
  timestamp: null,
  authors: ['Julien', 6],
  category: 'hey'
}).throw()
