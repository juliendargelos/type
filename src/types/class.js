import Type from '~/type'

/**
 * Represents a class type.
 * @class Class
 * @memberof Type
 * @extends Type
 * @inheritparams :1
 * @param {function?} [parent=null] If provided, type will only validate classes extending `parent`.
 */
class ClassType extends Type {
  constructor(parent = null, options = {}) {
    super(options)
    if(parent !== null) this.parent = parent
  }

  static primitives = ['function']
  static tests = {
    parent: ({value: {prototype}, errors, type: {parent}}) => {
      prototype instanceof parent || errors.add(`must be a class extending ${parent}`)
    }
  }
}

export default ClassType
