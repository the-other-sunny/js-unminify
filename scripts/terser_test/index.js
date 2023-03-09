const fs = require('node:fs');
const path = require('node:path');

const { minify } = require('terser');

const options = {
    compress: {
        defaults: false,
        sequences: false,
        // join_vars: true,
        if_return: true,
        conditionals: false,
        // booleans: true,
        // comparisons: true,
    },
    mangle: false,
    format: {
        beautify: true,
    },
}

async function main() {
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\scripts\terser_test\io\input.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    let result = await minify(sourceCode, options);
    console.log(result.code);
} 


main();