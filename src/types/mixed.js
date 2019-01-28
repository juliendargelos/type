import Type from '~/type'
import Errors from '~/errors'

class MixedType extends Type {
  constructor(...types) {
    super()
    this.types = types
  }

  static tests = {
    types: ({value, errors, type: {types}}) => {
      const typeErrors = new Errors()
      const failed = types.every(type => type
        .validate(value)
        .delegate(typeErrors)
        .failed
      )

      if(failed) errors.add(`type must be one of ${types.join(', ')}`, ...typeErrors)
    }
  }
}

export default MixedType
