import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";

import {
  isExpandable,
  willReturn,
  isInLambda,
  getTail,
  negate,
} from "../../AstUtils";

// TODO: move these two
interface LogicalANDExpression extends t.LogicalExpression {
  operator: "&&";
}
interface LogicalORExpression extends t.LogicalExpression {
  operator: "||";
}

type Test = t.IfStatement["test"];
type Consequent = t.IfStatement["consequent"];
type Alternate = t.IfStatement["alternate"];

interface IfStatement<T extends Test, U extends Consequent, V extends Alternate>
  extends t.IfStatement {
  test: T;
  consequent: U;
  alternate: V;
}

function sequenceExpressionTest(
  path: NodePath<IfStatement<t.SequenceExpression, Consequent, Alternate>>,
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

  const { test, consequent, alternate } = path.node;
  const expressions = [...test.expressions];
  const lastExpr = expressions.pop() as t.Expression;

  path.replaceWithMultiple([
    t.expressionStatement(t.sequenceExpression(expressions)),
    t.ifStatement(lastExpr, consequent, alternate),
  ]);
}

function ANDSequence1(
  path: NodePath<
    IfStatement<LogicalANDExpression, Consequent, null | undefined>
  >,
) {
  // if (c && seq)
  //     cons;
  // ===>
  // if (c)
  //     if (seq)
  //         cons;
  const { test, consequent } = path.node;
  const { left, right } = test;

  const innerIf = t.ifStatement(right, consequent);
  const outerIf = t.ifStatement(left, t.blockStatement([innerIf]));

  path.replaceWith(outerIf);
}

// TODO: should be more cautious about moving blocks around as it might cause scope issues, we should keep track of the declared names.
function ANDSequence2(
  path: NodePath<IfStatement<LogicalANDExpression, Consequent, t.Statement>>,
) {
  // if (c && seq)
  //     returning_cons;
  // else
  //     alt;
  // ===>
  // if (c && seq)
  //     returning_cons;
  // alt;
  if (!isExpandable(path)) {
    throw new Error("Provided path is not expandable.");
  }

  const { test, consequent, alternate } = path.node;

  if (!t.isBlockStatement(alternate)) {
    throw new Error("`IfStatement`s alternate should be a `BlockStatement`.");
  }

  path.replaceWithMultiple([
    t.ifStatement(test, consequent),
    ...alternate.body,
  ]);
}

function ORSequence1(
  path: NodePath<IfStatement<LogicalORExpression, Consequent, t.Statement>>,
) {
  // if (c || seq)
  //     cons;
  // else
  //     returning_alt;
  // ===>
  // if (!c && !seq)
  //     returning_alt;
  // else
  //     cons;
  const { test, consequent, alternate } = path.node;

  path.replaceWith(t.ifStatement(negate(test), alternate, consequent));
}

function ORSequence2(
  path: NodePath<
    IfStatement<LogicalORExpression, Consequent, null | undefined>
  >,
) {
  // function() {
  //     ...
  //     if (c || seq)
  //         cons;
  // }
  // ===>
  // function() {
  //     ...
  //     if (c || seq)
  //         cons;
  //     else
  //         return;
  // }

  const { test, consequent } = path.node;

  if (!t.isBlockStatement(consequent)) {
    throw new Error("`IfStatement`s consequent should be a `BlockStatement`");
  }

  path.replaceWith(
    t.ifStatement(test, consequent, t.blockStatement([t.returnStatement()])),
  );
}

// TODO: might need to detect and remove a last statement `return;` in returning_cons
function ORSequence3(
  path: NodePath<
    IfStatement<LogicalORExpression, Consequent, null | undefined>
  >,
) {
  // function() {
  //     ...
  //     if (c || seq)
  //         returning_cons;
  //     tail;
  // }
  // ===>
  // function() {
  //     ...
  //     if (c || seq) {
  //         returning_cons;
  //     } else {
  //         tail;
  //         [return;]
  //     }
  // }

  const { test, consequent } = path.node;

  if (!t.isBlockStatement(consequent)) {
    throw new Error("`IfStatement`s consequent should be a `BlockStatement`");
  }

  const parent = path.parent as t.BlockStatement;
  const thisIndex = parent.body.indexOf(path.node);

  const tailStatements = parent.body.slice(thisIndex + 1);
  if (!tailStatements.some(willReturn)) {
    tailStatements.push(t.returnStatement());
  }

  // remove tail from function's body
  const parentPath = path.parentPath as NodePath<t.BlockStatement>;
  const tailPaths = parentPath.get("body").slice(thisIndex + 1);
  for (const path of tailPaths) path.remove();

  path.replaceWith(
    t.ifStatement(test, consequent, t.blockStatement(tailStatements)),
  );
}

export default function (path: NodePath<t.IfStatement>) {
  const { test, consequent, alternate } = path.node;
  // if (seq, c)
  //     cons;
  if (t.isSequenceExpression(test)) {
    sequenceExpressionTest(
      path as NodePath<
        IfStatement<t.SequenceExpression, Consequent, Alternate>
      >,
    );
    return;
  }

  // if (c && seq)
  //     cons;
  if (
    t.isLogicalExpression(test) &&
    test.operator === "&&" &&
    t.isSequenceExpression(test.right) &&
    !alternate
  ) {
    ANDSequence1(
      path as NodePath<
        IfStatement<LogicalANDExpression, Consequent, null | undefined>
      >,
    );
    return;
  }

  // if (c && seq)
  //     returning_cons;
  // else
  //     alt;
  if (
    t.isLogicalExpression(test) &&
    test.operator === "&&" &&
    t.isSequenceExpression(test.right) &&
    alternate &&
    willReturn(consequent)
  ) {
    ANDSequence2(
      path as NodePath<
        IfStatement<LogicalANDExpression, Consequent, t.Statement>
      >,
    );
    return;
  }

  // if (c || seq)
  //     cons;
  // else
  //     returning_alt;
  if (
    t.isLogicalExpression(test) &&
    test.operator === "||" &&
    t.isSequenceExpression(test.right) &&
    willReturn(alternate)
  ) {
    ORSequence1(
      path as NodePath<
        IfStatement<LogicalORExpression, Consequent, t.Statement>
      >,
    );
    return;
  }

  if (
    isInLambda(path) &&
    t.isLogicalExpression(test) &&
    test.operator === "||" &&
    t.isSequenceExpression(test.right) &&
    !alternate
  ) {
    const tail = getTail(path);

    // function() {
    //     ...
    //     if (c || seq)
    //         cons;
    // }
    if (tail.length === 0) {
      ORSequence2(
        path as NodePath<
          IfStatement<LogicalORExpression, Consequent, null | undefined>
        >,
      );
      return;
    }

    // function() {
    //     ...
    //     if (c || seq)
    //         returning_cons;
    //     tail;
    // }
    if (willReturn(consequent)) {
      ORSequence3(
        path as NodePath<
          IfStatement<LogicalORExpression, Consequent, null | undefined>
        >,
      );
      return;
    }
  }
}
