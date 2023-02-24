const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

const deuglifyVisitor = require('./deuglify/deuglifyVisitor');
// const visitor = {
//     ArrowFunctionExpression(path) {
//         debugger;
//     }
// }

// ------------------
// const inputPath = './io/input/script_with_spaces.js';
// const inputPath = 'C:/Users/ryadb/Desktop/Touch Projects/old sources/script.js'

function main() {
    // const inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\2023-02-22_1.57.11_bf3fc730d107\js\build\script.js`;
    const inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\source_mod\split_modules\split_sources\2023-02-22_1.57.11_bf3fc730d107\0000.js`;
    const outputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\output\2023-02-22_1.57.11_bf3fc730d107.js`;
    
    let sourceCode;
    
    sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    
    const ast = parser.parse(sourceCode);
    traverse(ast, {...deuglifyVisitor});
    sourceCode = generate(ast).code;
    
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, sourceCode);
}

main();