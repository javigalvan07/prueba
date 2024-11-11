export function validateText(value) {
  const pattern = new RegExp('^([a-zA-Z]{6,10})$')
  if (pattern.test(value)) {
    return true
  } else {
    return false
  }
}