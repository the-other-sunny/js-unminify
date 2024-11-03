# js-unminify

## Install

## Usage

```sh
# reads from a file, writes to a file
js-unminify input.js --output-file output.js
# reads from a file, writes to standard output
js-unminify input.js
# reads from standard input, writes to a file
cat input.js | js-unminify -o output.js -
# reads from standard input, write to standard output
cat input.js | js-unminify -
```

## Development

```sh
git clone https://github.com/the-other-sunny/js-unminify.git
cd js-unminify
npm install
```
