import Type from '~/type'

export default class MixedType extends Type {
  constructor(...types) {
    super()
    this.types = types
  }

  static tests = {
    types: ({value, errors, type: {types}}) => {
      const failed = types.some(type => type
        .validate(value)
        .delegate(errors)
        .failed
      )

      if(failed) errors.prepend(`type must a mix of ${types.join(', ')}`)
    }
  }
}
