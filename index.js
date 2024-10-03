let removeAccents = require('remove-accents')
let escapeStringRegexp = require('escape-string-regexp')

module.exports = function (str, search) {
  let parts = removeAccents(str).split(new RegExp(escapeStringRegexp(search), 'ig'))
  let cur = ''
  let result = []
  let ret
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === '') {
      ret = {
        text: str.slice(cur.length, cur.length + search.length),
        highlight: true
      }
    } else {
      ret = {
        text: parts[i],
        highlight: false
      }
    }
    cur += ret.text
    result.push(ret)
    if (parts[i + 1] && (i !== 0 || parts[0] !== '')) {
      let text = str.slice(cur.length, cur.length + search.length)
      cur += text
      result.push({
        text: text,
        highlight: true
      })
    }
  }
  return result
}
