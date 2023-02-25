const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;

const VariableDeclaration = require('../../src/processNode/VariableDeclarationStatement');

const visitor = {
    VariableDeclaration: VariableDeclaration,
}

function main() {
    let inputPath = './tests/variable_declaration/io/input.txt';
    let outputPath = './tests/variable_declaration/io/output.txt';
    
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