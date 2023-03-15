const preProcessVisitor = require('../src/preProcessVisitor');
const mainVisitor = require('../src/mainVisitor');
const postProcessVisitor = require('../src/postProcessVisitor');

const { globSync } = require('glob');

const testParser = require('./testParser');

const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const assert = require('node:assert');

function transform(ast) {
    traverse(ast, preProcessVisitor);
    traverse(ast, mainVisitor);
    traverse(ast, postProcessVisitor);
}

describe('testing io files', () => {
    for (const file of globSync('./test/io/**/*.io.js')) {
        describe(`testing file: ${file}`, () => {
            for (const { name, inputAst, expectedOutputAst } of testParser(file)) {
                test(name, () => {
                    transform(inputAst);
                    const transformedCode = generate(inputAst).code;
                    const expectedCode = generate(expectedOutputAst).code;
                    expect(transformedCode).toBe(expectedCode);
                });
            }
        });
    }
})