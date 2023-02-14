const preProcessing = require('../../src/preProcessing');

visitor = {
    Statement: preProcessing.Statement,
};


// -------------------------------------------------------------------------------
const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const inputPath = './io/input/script_with_spaces.js';
const outputPath = './io/output/script0.js';

let sourceCode;
sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
sourceCode = `
if (x) {
    1;
} else if (y) 2;
`;
const ast = parser.parse(sourceCode);
traverse(ast, visitor);
sourceCode = generate(ast).code;
console.log(sourceCode);
// fs.mkdirSync(path.dirname(outputPath), { recursive: true });
// fs.writeFileSync(outputPath, sourceCode);