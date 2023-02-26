const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const visitor = {
    ConditionalExpression(path) {
        if (path.parentPath.isExpressionStatement()) {
            console.log(path.toString() + '\n');
        }
    }
}

function main() {
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();