const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');


//////////////////////////////////////////////////////////////////////////////


SequenceExpression = function (path) {
    const parentPath = path.parentPath;
    if (!t.isExpressionStatement(path.parentPath.node))
        return;
    
    const newNodes = [];
    for (const node of path.node.expressions) {
        t.assertExpression(node);
        const newNode = t.expressionStatement(node);
        newNodes.push(newNode);
    }
    path.parentPath.replaceWithMultiple(newNodes);
}

let visitor = {
    VariableDeclaration: VariableDeclaration,
    SequenceExpression: SequenceExpression
}

const _visitor = {
    SequenceExpression(path) {
        const parentPath = path.parentPath;
        const parentCode = generate(parentPath.node).code;
        console.log(parentCode);
    }
}

visitor = {

}


//////////////////////////////////////////////////////////////////////////////
const inputPath = './input/script_with_spaces.js'
const outputPath = './output/script0.js';

let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
const ast = parser.parse(sourceCode);
traverse(ast, visitor);
sourceCode = generate(ast).code;
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sourceCode);