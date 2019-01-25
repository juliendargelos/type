import Type from '~/type'

export default class ValueType extends Type {
  constructor({only = null, except = null}) {
    super()
    if(only) this.only = Array.isArray(only) ? only : [only]
    if(except) this.except = Array.isArray(except) ? except : [except]
  }

  static tests = {
    only: ({value, errors, type: {only}}) => !only.includes(value) && errors.add(
      `must be ${only.length > 1 ? 'one of ' : ''}` +
      only.map(Type.stringify).join(', ')
    ),

    except: ({value, errors, type: {except}}) => except.includes(value) && errors.add(
      `must not be ${except.length > 1 ? 'one of ' : ''}` +
      except.map(Type.stringify).join(', ')
    )
  }
}
