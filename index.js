const { Parser, HtmlRenderer } = require('commonmark')

const parser = new Parser()
const renderer = new HtmlRenderer({ safe: true, smart: true })

module.exports = function md (strings, ...values) {
  let str = ''
  strings.forEach((string, i) => {
    str += string + (values[i] || '')
  })
  return renderer.render(parser.parse(str))
}
