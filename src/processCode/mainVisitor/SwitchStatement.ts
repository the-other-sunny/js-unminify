import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { isExpandable } from '../../AstUtils';

interface SwitchStatement<T extends t.Expression> extends t.SwitchStatement {
    discriminant: T
}

function sequenceDiscriminant(
    path: NodePath<SwitchStatement<t.SequenceExpression>>
) {
    const { discriminant, cases } = path.node;
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

    const expressions = [...discriminant.expressions];
    const lastExpr = expressions.pop() as t.Expression;
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.switchStatement(lastExpr, cases)
    ]);
}

export default function(path: NodePath<t.SwitchStatement>) {
    const discriminant = path.node.discriminant;
    
    if (t.isSequenceExpression(discriminant)) {
        sequenceDiscriminant(
            path as NodePath<SwitchStatement<t.SequenceExpression>>
        );
        return;
    }
};