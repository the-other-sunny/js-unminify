const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

let s = new Set();

const visitor = {
    ForStatement(path) {
    
        const visitor_ = {
            Identifier(path) {
                s.add(path.parentPath.type);
                if (path.parentPath.type === 'SequenceExpression') {
                    const parentFor = path.findParent(path => path.isForStatement());
                    console.log(path.toString());
                    console.log(parentFor.toString());
                    console.log();
                }
            }
        };
        path.get('test').traverse(visitor_);
        path.get('update').traverse(visitor_);
    },
    
}

function main() {
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\0000-00-00_0.0.0\js\build\script.js`;
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();
console.log([...s].join('\n'));