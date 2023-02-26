const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const sequenceExpression = require('../../src/processNode/ExpressionStatement/sequenceExpression.js');
const isExpandable = require('../../src/utils').isExpandable;

const visitor = {
    ExpressionStatement(path) {
        if (!isExpandable(path)) {
            return;
        }
        if (t.isSequenceExpression(path.node.expression)) {
            sequenceExpression(path);
        }
    }
};

function main() {
    let inputPath = './tests/sequence_expression/io/input.txt';
    let outputPath = './tests/sequence_expression/io/output.txt';
    
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    let ast = parser.parse(sourceCode, {
        errorRecovery: true,
    });
    traverse(ast, visitor);
    sourceCode = generate(ast).code;
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sourceCode);
}

main();