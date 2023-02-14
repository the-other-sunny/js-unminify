const preProcessing = require('../../src/preProcessing');
const VariableDeclaration = require('../../src/processNode/VariableDeclaration');

visitor = {
    Statement: preProcessing.Statement,
    VariableDeclaration,
};


// -------------------------------------------------------------------------------
const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const inputPath = './io/input/script_with_spaces.js';
const outputPath = './io/output/script1.js';

let sourceCode;
sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
const ast = parser.parse(sourceCode);
traverse(ast, visitor);
sourceCode = generate(ast).code;
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sourceCode);