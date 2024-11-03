import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";

interface IfBlockStatement extends t.BlockStatement {
  body: [t.IfStatement];
}

interface NestedIfStatement extends t.IfStatement {
  alternate: IfBlockStatement;
}

function nestedIf(path: NodePath<NestedIfStatement>) {
  const { test, consequent, alternate } = path.node;
  const altIf = alternate.body[0];
  path.replaceWith(t.ifStatement(test, consequent, altIf));
}

export default function (path: NodePath<t.IfStatement>) {
  const alternate = path.node.alternate;
  if (
    alternate &&
    t.isBlockStatement(alternate) &&
    alternate.body.length === 1 &&
    t.isIfStatement(alternate.body[0])
  ) {
    nestedIf(path as NodePath<NestedIfStatement>);
  }
}
