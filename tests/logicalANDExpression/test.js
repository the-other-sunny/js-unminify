const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const logicalANDExpression = require('../../src/processNode/ExpressionStatement/logicalANDExpression');

const visitor = {
    ExpressionStatement(path) {
        const expression = path.node.expression;
        if (t.isLogicalExpression(expression) && (expression.operator === '&&')) {
            logicalANDExpression(path);
        }
    }
};

function main() {
    let inputPath = './tests/logicalANDExpression/io/input.txt';
    let outputPath = './tests/logicalANDExpression/io/output.txt';
    
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    let ast = parser.parse(sourceCode, {
        // errorRecovery: true,
    });
    traverse(ast, visitor);
    sourceCode = generate(ast).code;
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sourceCode);
}

main();