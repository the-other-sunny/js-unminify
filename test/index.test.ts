import { describe, expect, test } from "@jest/globals";

import preVisitor from "../src/processCode/preVisitor";
import mainVisitor from "../src/processCode/mainVisitor";
import postVisitor from "../src/processCode/postVisitor";

import type * as t from "@babel/types";
import generate from "@babel/generator";
import { globSync } from "glob";

import testParser from "./testParser";

import { default as traverse } from "@babel/traverse";

function transform(ast: t.Node) {
  traverse(ast, preVisitor);
  traverse(ast, mainVisitor);
  traverse(ast, postVisitor);
}

describe("io test", () => {
  for (const file of globSync("./test/io/**/*.io.js")) {
    describe(file, () => {
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
});
