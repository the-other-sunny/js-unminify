const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const ExpressionStatement = require('../src/processNode/ExpressionStatement');

const visitor = {
    ExpressionStatement: ExpressionStatement
};

let sourceCode = `1 && 2`;

const ast = parser.parse(sourceCode);
traverse(ast, visitor);