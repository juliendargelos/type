export default {
  message: (comparison, target, {value, subject = null, exclude = false}) => (
    (subject ? `${subject} ` : '') +
    `must be ${comparison} ` +
    (exclude ? '' : 'or equal to ') +
    `${target}, got ` +
    (subject ? `${subject} equal to ` : '') +
    (subject ? value[subject] : value)
  ),

  exclude(exclude, boundary) {
    return exclude === true || typeof exclude === 'object' && exclude[boundary]
  }
}
