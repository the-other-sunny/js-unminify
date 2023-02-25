const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const visitor = {
    enter(path) {
        t;
        debugger;
    }
    // ReturnStatement(path) {
    //     let str = path.toString();
    //     const argument = path.node.argument;
    //     if (argument?.type === 'UpdateExpression') {
    //         console.log(str + '\n');
    //     }
    // },
}

function main() {
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\deuglified_script.js`;
    // let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    let sourceCode = `
function foo() {
    'a';
    'b';
    for (let i = 0; i < 10; ++i) {
        0;
    }
    1;
    2;
    return a;
}
`;

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();