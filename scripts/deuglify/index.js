const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

const deuglifyVisitor = require('./deuglifyVisitor');

function deuglify(inputPath, outputPath) {
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    let ast = parser.parse(sourceCode);
    traverse(ast, deuglifyVisitor);
    sourceCode = generate(ast).code;

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sourceCode);
}

const inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;
const outputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\deuglified_script.js`;

deuglify(inputPath, outputPath);