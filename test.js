const tap = require('tap')
const assertHtml = require('assert-html')
const html = require('bel')
const md = require('./')

tap.test('render html', t => {
  let found = md`# hello`
  let expected = html`<h1>hello</h1>`.toString()

  assertHtml(t, found, expected)

  found = md`
# hello

Hello, world`

  expected = html`<h1>hello</h1>\n<p>Hello, world</p>`.toString()

  assertHtml(t, found, expected)

  t.end()
})

tap.test('render html with args', t => {
  const name = 'markdown'

  let found = md`# Hello, ${name}`
  let expected = html`<h1>Hello, ${name}</h1>`.toString()

  assertHtml(t, found, expected)

  t.end()
})
