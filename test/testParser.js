const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert')

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

function testParser(inputPath) {
    function checkFormat(ast) {
        for (const testBlock of ast.program.body) {
            t.assertLabeledStatement(testBlock);
            t.assertBlockStatement(testBlock.body);

            assert(testBlock.body.body.length === 2);

            t.assertLabeledStatement(testBlock.body.body[0]);
            assert(testBlock.body.body[0].label.name === 'input');
            t.assertBlockStatement(testBlock.body.body[0].body);

            t.assertLabeledStatement(testBlock.body.body[1]);
            assert(testBlock.body.body[1].label.name === 'expected_output');
            t.assertBlockStatement(testBlock.body.body[1].body);
        }
    }

    function extractTestBlock(testBlock) {
        const name = testBlock.label.name;
        const [inputBlock, expectedOutputBlock] = testBlock.body.body;
        
        const inputAst = t.file(t.program(inputBlock.body.body));
        const expectedOutputAst = t.file(t.program(expectedOutputBlock.body.body));

        return { name, inputAst, expectedOutputAst };
    }

    const sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    const ast = parser.parse(sourceCode);
    checkFormat(ast);
    const result = ast.program.body.map(testBlock => {
        return extractTestBlock(testBlock);
    });

    return result;
}

module.exports = testParser;