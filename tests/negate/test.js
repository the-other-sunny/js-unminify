const fs = require('node:fs');
const path = require('node:path');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const negate = require('../../src/utils').negate;

const visitor = {
    Expression(path) {
        path.replaceWith(negate(path.node));
        path.skip();
    }
};

function main() {
    let inputPath = './tests/negate/io/input.txt';
    let outputPath = './tests/negate/io/output.txt';
    
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