import fs from "node:fs";

import { program } from "commander";

import processCode from "./processCode";

async function readFromStdin() {
  const chunks = [];

  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }

  return chunks.join("");
}

function main() {
  program
    .name("js-unminify")
    .argument("<inputFile>", 'input file (reads from stdin if "-" is given)')
    .option(
      "-o, --output <outputFile>",
      "output file (writes to stdout if ignored)",
    )
    .action(async (inputFile, options) => {
      const input =
        inputFile === "-"
          ? await readFromStdin()
          : fs.readFileSync(inputFile, "utf8");
      const output = processCode(input);

      fs.writeFileSync(options.outputFile || process.stdout.fd, output);
    });

  program.parse();
}

main();
