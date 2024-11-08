import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";

import { isExpandable } from "../../AstUtils";

interface VariableDeclarator<T extends t.VariableDeclarator["init"]>
  extends t.VariableDeclarator {
  init: T;
}

interface SingleVariableDeclaration<T extends t.VariableDeclarator>
  extends t.VariableDeclaration {
  declarations: [T];
}

type SingleDeclaratorWithSequenceExpression = SingleVariableDeclaration<
  VariableDeclarator<t.SequenceExpression>
>;

function multipleDeclarators(path: NodePath<t.VariableDeclaration>) {
  if (!isExpandable(path)) {
    console.warn(
      `Given \`path\` is not expandable.\n` +
        `    Node type: ${path.node.type}\n` +
        `    Parent type: ${path.parent.type}\n` +
        `Node source code:\n` +
        `${path.toString()}`,
    );
    return;
  }

  const { kind, declarations } = path.node;

  path.replaceWithMultiple(
    declarations.map((varDeclarator) =>
      t.variableDeclaration(kind, [varDeclarator]),
    ),
  );
}

function singleDeclaratorWithSequenceExpression(
  path: NodePath<SingleDeclaratorWithSequenceExpression>,
) {
  if (!isExpandable(path)) {
    console.warn(
      `Given \`path\` is not expandable.\n` +
        `    Node type: ${path.node.type}\n` +
        `    Parent type: ${path.parent.type}\n` +
        `Node source code:\n` +
        `${path.toString()}`,
    );
    return;
  }

  const { kind, declarations } = path.node;
  const { id, init } = declarations[0];
  const expressions = [...init.expressions];
  const lastExpr = expressions.pop();

  path.replaceWithMultiple([
    t.expressionStatement(t.sequenceExpression(expressions)),
    t.variableDeclaration(kind, [t.variableDeclarator(id, lastExpr)]),
  ]);
}

/**
 * If the `VariableDeclaration` declares multiple variables it is turned into
 * multiple `VariableDeclaration`s each declaring a single variable.
 * If the `VariableDeclaration` declares a single variable assigning a
 * `SequenceExpression` to it, the `SequenceExpression` is placed before the
 * `VariableDeclaration`, except for its last element which remains assigned
 * to the variable.
 *
 * @param {Path} path
 */
export default function (path: NodePath<t.VariableDeclaration>) {
  if (!isExpandable(path)) {
    return; // it's ok if it's a `ForStatement`'s init... but otherwise??
  }

  const node = path.node;
  if (node.declarations.length > 1) {
    multipleDeclarators(path);
    return;
  }

  if (
    node.declarations.length === 1 &&
    t.isSequenceExpression(node.declarations[0].init)
  ) {
    singleDeclaratorWithSequenceExpression(
      path as NodePath<SingleDeclaratorWithSequenceExpression>,
    );
    return;
  }
}
