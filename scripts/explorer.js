const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const visitor = {
    ArrowFunctionExpression(path) {
        debugger;
    }
}

// ------------------
// const inputPath = './io/input/script_with_spaces.js';
// const inputPath = 'C:/Users/ryadb/Desktop/Touch Projects/old sources/script.js'
const inputPath = 'C:\\Users\\Sunny\\OneDrive\\Touch Projects\\touch updates\\Touch_sources\\archives\\2023-01-17_1.57.6_3p3tIkyK\\js\\build\\script.js';

let sourceCode;

sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

const ast = parser.parse(sourceCode);
traverse(ast, visitor);