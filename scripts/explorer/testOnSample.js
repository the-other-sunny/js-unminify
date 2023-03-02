const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const ReturnStatement = require('../../src/processNode/ReturnStatement');

const visitor = {
    ReturnStatement
};

function main() {
    let inputPath = String.raw`C:\Users\Sunny\OneDrive\Touch Projects\deuglify\tests\return_undefined\io\input.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, {
        LabeledStatement(path) {
            path.get('body').traverse(visitor);
        }
    });
    console.log(generate(ast).code);
}

main();