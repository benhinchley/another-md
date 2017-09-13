# md
> markdown tagged template literal

## Install

```
# if you are using yarn
$ yarn add @benhinchley/md

# or if you are using npm
$ npm install --save @benhinchley/md
```

## Usage

```js
const md = require("@benhinchley/md")
const http = require("http")

http.createServer((req, res) => {
	let doc = md`
# Hello!!!

You have come to ${req.url}
	`
	res.end(doc)
}).listen(process.env.PORT || 3000)
```

## License

WTFPL © Benjamin Hinchley