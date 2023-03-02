const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

// const ReturnStatement = require('../src/processNode/ReturnStatement');

function makeTest(node) {
    const ast = t.labeledStatement(
        t.identifier(index.toString()),
        t.blockStatement([
            t.functionDeclaration(
                t.identifier('f'),
                [],
                t.blockStatement([node])
            )
        ])
    );
    console.log(generate(ast).code);
    ++index;
}

let index = 0;
const visitor = {
    ReturnStatement
}

function main() {
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\0000-00-00_0.0.0\js\build\script.js`;
    let inputPath = String.raw`C:\Users\Sunny\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();