const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const ForStatement = require('../src/processNode/ForStatement');

const visitor = {
    enter(path) {
        debugger;
    }
};

let sourceCode = `
let a;
a === undefined;
`;

const ast = parser.parse(sourceCode);
traverse(ast, visitor);
console.log(generate(ast).code);