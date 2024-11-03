import fs from "node:fs";

import { program } from "commander";

import processCode from "./processCode";

function main() {
  program
    .name("js-unminify")
    .requiredOption("-i, --input-file <path>", "input file")
    .requiredOption("-o, --output-file <path>", "output file");

  program.parse();

  const options = program.opts();

  const { inputFile, outputFile } = options;
  const inputContent = fs.readFileSync(inputFile, "utf-8");

  const outputContent = processCode(inputContent);

  fs.writeFileSync(outputFile, outputContent, "utf-8");
}

main();
