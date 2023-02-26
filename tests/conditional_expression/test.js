const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const isExpandable = require('../../src/utils').isExpandable;

const conditionalExpression = require('../../src/processNode/ExpressionStatement/conditionalExpression');

const visitor = {
    ExpressionStatement(path) {
        if (!isExpandable(path)) {
            return;
        }
        if (t.isConditionalExpression(path.node.expression)) {
            conditionalExpression(path);
        }
    }
};

function main() {
    let inputPath = './tests/conditional_expression/io/input.txt';
    let outputPath = './tests/conditional_expression/io/output.txt';
    
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