import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';

import { isExpandable, negate } from '../../astUtils';

// TODO: move these two
interface LogicalANDExpression extends t.LogicalExpression {
    operator: '&&';
}
interface LogicalORExpression extends t.LogicalExpression {
    operator: '||';
}

interface SequenceExpressionAssignment extends t.AssignmentExpression {
    right: t.SequenceExpression;
}
interface ConditionalExpressionAssignment extends t.AssignmentExpression {
    right: t.ConditionalExpression;
}
interface ExpressionStatement<T extends t.Expression> extends t.ExpressionStatement {
    expression: T;
}

function sequenceExpression(
    path: NodePath<ExpressionStatement<t.SequenceExpression>>
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

    const expressions = path.node.expression.expressions;
    
    path.replaceWithMultiple(
        expressions.map(expr => t.expressionStatement(expr))
    );
}

function conditionalExpression(
    path: NodePath<ExpressionStatement<t.ConditionalExpression>>
) {
    const { test, consequent, alternate } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            test,
            t.blockStatement([t.expressionStatement(consequent)]),
            t.blockStatement([t.expressionStatement(alternate)])
        )
    );
}

function logicalANDExpression(
    path: NodePath<ExpressionStatement<LogicalANDExpression>>
) {
    const { left, right } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            left,
            t.blockStatement([t.expressionStatement(right)])
        )
    );
}

function logicalORExpression(
    path: NodePath<ExpressionStatement<LogicalORExpression>>
) {
    const { left, right } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            negate(left),
            t.blockStatement([t.expressionStatement(right)])
        )
    );
}

function assignSequence(
    path: NodePath<ExpressionStatement<SequenceExpressionAssignment>>
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

    const { operator, left, right } = path.node.expression;
    const expressions = [...right.expressions];
    const lastExpr = expressions.pop() as t.Expression;

    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.expressionStatement(t.assignmentExpression(operator, left, lastExpr))
    ]);
}

function assignConditional(
    path: NodePath<ExpressionStatement<ConditionalExpressionAssignment>>
) {
    function _assignConditional(
        path: NodePath<ExpressionStatement<ConditionalExpressionAssignment>>
    ) {
        const { operator, left, right } = path.node.expression;
        const { test, consequent, alternate } = right;
        
        const consequent_ = t.expressionStatement(
            t.assignmentExpression(operator, left, consequent)
        );
        const alternate_ = t.expressionStatement(
            t.assignmentExpression(operator, left, alternate)
        );
    
        path.replaceWith(t.ifStatement(
            test,
            t.blockStatement([consequent_]),
            t.blockStatement([alternate_])
        ));
    }
    
    const right = path.node.expression.right;
    const { consequent, alternate } = right;

    if (
        t.isConditionalExpression(consequent) ||
        t.isConditionalExpression(alternate) ||
        t.isSequenceExpression(consequent) ||
        t.isSequenceExpression(alternate)
    ) {
        const visitor = {
            ExpressionStatement(path: NodePath<t.ExpressionStatement>) {
                const expression = path.node.expression;

                if (!t.isAssignmentExpression(expression))
                    return;
                
                if (t.isSequenceExpression(expression.right))
                    assignSequence(
                        path as NodePath<ExpressionStatement<SequenceExpressionAssignment>>
                    );
            
                if (t.isConditionalExpression(expression.right))
                    _assignConditional(
                        path as NodePath<ExpressionStatement<ConditionalExpressionAssignment>>
                    );
            }
        };
        // this is needed as the traversal will explore `path`'s childs and won't process `path` itself.
        _assignConditional(path);
        path.traverse(visitor);
    }
}

export default function(path: NodePath<t.ExpressionStatement>) {
    const expression = path.node.expression;

    if (t.isSequenceExpression(expression)) {
        sequenceExpression(
            path as NodePath<ExpressionStatement<t.SequenceExpression>>
        );
        return;
    }

    if (t.isConditionalExpression(expression)) {
        conditionalExpression(
            path as NodePath<ExpressionStatement<t.ConditionalExpression>>
        );
        return;
    }

    if (t.isLogicalExpression(expression) && expression.operator === '&&') {
        logicalANDExpression(
            path as NodePath<ExpressionStatement<LogicalANDExpression>>
        );
        return;
    }

    if (t.isLogicalExpression(expression) && expression.operator === '||') {
        logicalORExpression(
            path as NodePath<ExpressionStatement<LogicalORExpression>>
        );
        return;
    }

    if (t.isAssignmentExpression(expression) &&
        t.isSequenceExpression(expression.right)
    ) {
        assignSequence(
            path as NodePath<ExpressionStatement<SequenceExpressionAssignment>>
        );
        return;
    }

    // if (t.isAssignmentExpression(expression) &&
    //     t.isConditionalExpression(expression.right)
    // ) {
    //     assignConditional(
    //         path as ExpressionStatementPath<ConditionalExpressionAssignment>
    //     );
    //     return;
    // }
};