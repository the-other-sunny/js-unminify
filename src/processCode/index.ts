import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import type * as t from "@babel/types";

import preVisitor from "./preVisitor";
import mainVisitor from "./mainVisitor";
import postVisitor from "./postVisitor";

function transform(ast: t.Node) {
  traverse(ast, preVisitor);
  traverse(ast, mainVisitor);
  traverse(ast, postVisitor);
}

export default function (sourceCode: string): string {
  const ast = parser.parse(sourceCode);
  transform(ast);
  return generate(ast).code;
}
