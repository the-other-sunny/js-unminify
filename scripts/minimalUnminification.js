const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;

// const inputPath = './io/input/script.js';
// const outputPath = './io/input/script_with_spaces.js';

const inputPath = './io/input/script (unminified).js';
const outputPath = './io/input/script (unminified) - 1.js';

let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
const ast = parser.parse(sourceCode);
sourceCode = generate(ast).code;

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sourceCode);