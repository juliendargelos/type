import Type from '~/type'

/**
 * Represents a class instance type.
 * @class Instance
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {function?} [klass=null] If provided, type will only validate values that are instances of `klass`.
 */
class InstanceType extends Type {
  constructor(klass = null, options = {}) {
    super(options)
    if(klass !== null) this.klass = klass
  }

  static primitives = ['array', 'object', 'function']
  static tests = {
    klass: ({value, errors, type: {klass}}) => {
      value instanceof klass || errors.add(`must be an instance of ${klass}`)
    }
  }
}

export default InstanceType
