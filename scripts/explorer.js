const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const { isExpandable } = require('../src/utils');

const outputs = [];
const visitor = {
    Statement(path) {
        const code = path.toString();
        if (code.includes('\n'))
            return;
        if (code.length > 100) {
            outputs.push(code);
        }
    }
}

function main() {
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\0000-00-00_0.0.0\js\build\script.js`;
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\output\script_deuglified_9.js`;
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script (unminified).js`;
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;

    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();
outputs.sort((codeA, codeB) => codeB.length - codeA.length);
for (const output of outputs) {
    console.log(output);
}