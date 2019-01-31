import Type from '~/type'

/**
 * Represents a specific value type.
 * @class Value
 * @memberof Type
 * @extends Type
 * @inheritparams
 */
class ValueType extends Type {
  constructor({only = null, except = null, ...options} = {}) {
    super(options)
    if(only) this.only = Array.isArray(only) ? only : [only]
    if(except) this.except = Array.isArray(except) ? except : [except]
  }

  static tests = {
    only: ({value, errors, type: {only}}) => !only.includes(value) && errors.add(
      `must be ${only.length > 1 ? 'one of ' : ''}` +
      only.map(v => Type.stringify(v)).join(', ')
    ),

    except: ({value, errors, type: {except}}) => except.includes(value) && errors.add(
      `must not be ${except.length > 1 ? 'one of ' : ''}` +
      except.map(v => Type.stringify(v)).join(', ')
    )
  }
}

export default ValueType
