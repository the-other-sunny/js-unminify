import fs from 'node:fs';

import { program } from "commander";

import processCode from "./processCode";

program
    .name('unminify')
    .option('-i, --input-file', 'input file')
    .option('-o, --output-file', 'output file')
    .action(function(options) {
        const { inputFile, outputFile } = options;
        const inputContent = fs.readFileSync(inputFile, 'utf-8');

        const outputContent = processCode(inputContent);
        fs.writeFileSync(outputFile, outputContent, 'utf-8');
    });