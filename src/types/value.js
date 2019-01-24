import Type from '~/type'

export default class ValueType extends Type {
  constructor(...values) {
    super()
    this.values = values
  }

  validate(value) {
    return super.validate(value).continue(validation => {
      if(!this.values.includes(value)) {
        validation.errors.add(`must be one of ${this.values.map(JSON.stringify).join(', ')}`)
      }
    })
  }
}
