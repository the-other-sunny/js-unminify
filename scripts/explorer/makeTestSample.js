const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

function turnNodeToTestNode(node) {
    return t.labeledStatement(
        t.identifier(`test${index}`),
        t.blockStatement([
            t.functionDeclaration(
                t.identifier('f'),
                [],
                t.blockStatement([node])
            )
        ])
    );
}

let index = 0;
const visitor = {
     ReturnStatement(path) {
        const argument = path.node.argument;
        if (t.isSequenceExpression(argument)) {
            
        } else if (t.isConditionalExpression(argument)) {
            
        } else if (t.isUnaryExpression(argument) && argument.operator === 'void') {
            
        } else if (t.isIdentifier(argument) && argument.name === 'undefined') {
            const testAst = turnNodeToTestNode(path.node);
            console.log(generate(testAst).code);
            ++index;
        }
    }
}

const UnaryExpression = require('../../src/preProcessing').UnaryExpression;
const preProcessVisitor = {
    UnaryExpression
};

function main() {
    const inputPath = String.raw`C:\Users\Sunny\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    const sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    const ast = parser.parse(sourceCode);
    traverse(ast, preProcessVisitor);
    traverse(ast, visitor);
}

main();