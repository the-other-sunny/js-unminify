const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const { prependListener } = require('node:process');

function preProcess(ast) {
    const Statement = require('../src/preProcessing').Statement;
    const UnaryExpression = require('../src/preProcessing').UnaryExpression;
    traverse(ast, { Statement, UnaryExpression });
}

function process(ast) {
    const ExpressionStatement = require('../src/processNode/ExpressionStatement');
    const ForStatement = require('../src/processNode/ForStatement');
    const IfStatement = require('../src/processNode/IfStatement');
    const ReturnStatement = require('../src/processNode/ReturnStatement');
    const SwitchStatement = require('../src/processNode/SwitchStatement');
    const ThrowStatement = require('../src/processNode/ThrowStatement');
    const VariableDeclaration = require('../src/processNode/VariableDeclaration');
    traverse(ast, {
        ExpressionStatement,
        ForStatement,
        IfStatement,
        ReturnStatement,
        SwitchStatement,
        ThrowStatement,
        VariableDeclaration
    });
}

function postProcess(ast) {
    return;
}

function main() {
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    
    preProcess(ast);
    process(ast);
    // traverse(ast, visitor);
    sourceCode = generate(ast).code;
    
    const outputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\output\script_deuglified_1.js`;
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sourceCode);
}

main();