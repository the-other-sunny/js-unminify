import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';

import { isExpandable } from '../../astUtils';

interface ThrowStatement<T extends t.Expression> extends t.ThrowStatement {
    argument: T
}

function throwSequence(
    path: NodePath<ThrowStatement<t.SequenceExpression>>
) {
    if (!isExpandable(path)) {
        console.warn(
            `Given \`path\` is not expandable.\n` +
            `    Node type: ${path.node.type}\n` +
            `    Parent type: ${path.parent.type}\n` +
            `Node source code:\n` +
            `${path.toString()}`
        );
        return;
    }
    
    const expressions = [...path.node.argument.expressions];
    const lastExpr = expressions.pop() as t.Expression;
    
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.throwStatement(lastExpr)
    ]);
}

export default function(path: NodePath<t.ThrowStatement>) {
    // TODO: `ThrowStatement`s share a lot of similarities with `ReturnStatement`s
    // should probably study that more in depth to better process `ThrowStatement`s
    const argument = path.node.argument;
    
    if (t.isSequenceExpression(argument)) {
        throwSequence(
            path as NodePath<ThrowStatement<t.SequenceExpression>>
        );
        return;
    }
};