import Type from '~/type'
import types from '~/types/*'

Object.values(types).forEach(type => Type.register(type))

export default Type
