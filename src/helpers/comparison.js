export default {
  message: ({value, target, subject = null, equal = true, compare = null}) => (
    (subject ? `${subject} ` : '') +
    'must be' +
    (compare ? `${compare} than ` : '') +
    (compare && equal ? 'or ' : '') +
    (equal ? 'equal to ' : '') +
    `${target}, got ` +
    (subject ? `${subject} ` : '') +
    `equal to ${value}`
  )
}
