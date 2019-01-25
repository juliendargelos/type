import Type from '~/type'

export default class OneOfType extends Type {
  constructor(...types) {
    super()
    this.types = types
  }

  static tests = {
    types: ({value, errors, type: {types}}) => {
      const failed = types.every(type => type
        .validate(value)
        .delegate(errors)
        .failed
      )

      if(failed) errors.prepend(`type must be one of ${types.join(', ')}`)
    }
  }
}
