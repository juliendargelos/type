import Type from '~/type'

export default class OneOfType extends Type {
  constructor(...types) {
    super()
    this.types = types
  }

  validate(value) {
    return super.validate(value).continue(validation => {
      const errors = []
      const failed = this.types.every(type => type
        .validate(value)
        .delegate(errors)
        .failed
      )

      if(failed) {
        validation.errors.add(
          `type must be one of ${this.types.join(', ')}`,
          ...errors
        )
      }
    })
  }
}
