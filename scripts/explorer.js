const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const types = new Set();

const visitor = {
    SequenceExpression(path) {
        const parentType = path.parent.type;
        if (parentType === 'LogicalExpression') {
            // console.log(path.parentPath.toString() + '\n');
            const parentStatementPath = path.findParent(path => path.isStatement());
            // types.add(parentStatementPath.type); 
            if (parentStatementPath.type === 'IfStatement') {
                const test = parentStatementPath.node.test;
                const outputAst = t.ifStatement(test, t.emptyStatement());
                const output = generate(outputAst).code;
                console.log(output + '\n');
            }
        }
    }
}

function main() {
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\0000-00-00_0.0.0\js\build\script.js`;
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\output\script_deuglified_1.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();
console.log(...types);