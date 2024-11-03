import * as t from "@babel/types";
import type { NodePath } from "@babel/traverse";

/**
 * Apply the following transformations:
 *     `void 0` ---> `undefined`
 *     `!0`     ---> `true`
 *     `!1`     ---> `false`
 * @param {Path} path
 */
export default function (path: NodePath<t.UnaryExpression>) {
  const { operator, argument } = path.node;

  if (
    operator === "void" &&
    t.isNumericLiteral(argument) &&
    argument.value === 0
  ) {
    path.replaceWith(t.identifier("undefined"));
    return;
  }

  if (operator === "!" && t.isNumericLiteral(argument)) {
    if (argument.value === 0) {
      path.replaceWith(t.booleanLiteral(true));
    }
    if (argument.value === 1) {
      path.replaceWith(t.booleanLiteral(false));
    }
    return;
  }
}
