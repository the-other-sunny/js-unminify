import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';

import { isExpandable, isBoolean, negate, isBooleanSequence} from '../../astUtils';

interface AssignmentExpression<
    T extends t.AssignmentExpression['left'],
    U extends t.AssignmentExpression['right']
> extends t.AssignmentExpression {
    left: T,
    right: U
}

interface VoidExpression extends t.UnaryExpression {
    operator: 'void'
}

interface ReturnStatement<
    T extends t.ReturnStatement['argument']
> extends t.ReturnStatement {
    argument: T
}

type ExtractableAssignment = 
    AssignmentExpression<t.Identifier | t.MemberExpression, t.Expression>;

// TODO: move these somewhere else
interface UndefinedIdentifier extends t.Identifier {
    name: 'undefined'
}
interface LogicalANDExpression extends t.LogicalExpression {
    operator: '&&';
}
interface LogicalORExpression extends t.LogicalExpression {
    operator: '||';
}

function returnSequence(
    path: NodePath<ReturnStatement<t.SequenceExpression>>
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
        t.returnStatement(lastExpr)
    ]);
}

function returnConditional(
    path: NodePath<ReturnStatement<t.ConditionalExpression>>
) {
    const { test, consequent, alternate } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            test,
            t.blockStatement([t.returnStatement(consequent)]),
            t.blockStatement([t.returnStatement(alternate)])
        )
    );
}

function returnVoid(
    path: NodePath<ReturnStatement<VoidExpression>>
) {
    if (!isExpandable(
path
)) {
        console.warn(
            `Given \`path\` is not expandable.\n` +
            `    Node type: ${path.node.type}\n` +
            `    Parent type: ${path.parent.type}\n` +
            `Node source code:\n` +
            `${path.toString()}`
        );
        return;
    }
    
    const expression = path.node.argument.argument;
    path.replaceWithMultiple([
        t.expressionStatement(expression),
        t.returnStatement()
    ]);
}


// TODO: we should check if any LVal can be returned...
// only Identifier and MemberExpression can be return
// i.e. LVals that are also Expressions
function returnAssignment(
    path: NodePath<ReturnStatement<ExtractableAssignment>>
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
    
    const { operator, left, right } = path.node.argument;
    
    path.replaceWithMultiple([
        t.expressionStatement(t.assignmentExpression(operator, left, right)),
        t.returnStatement(left)
    ]);
}

function returnUndefined(
    path: NodePath<ReturnStatement<UndefinedIdentifier>>
) {
    path.replaceWith(t.returnStatement());
}

function returnLogicalAND(
    path: NodePath<ReturnStatement<LogicalANDExpression>>
) {
    const { left, right } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            negate(left),
            t.blockStatement([t.returnStatement(t.booleanLiteral(false))]),
            t.blockStatement([t.returnStatement(right)]))
    );
}

function returnLogicalOR(
    path: NodePath<ReturnStatement<LogicalORExpression>>
) {
    const { left, right } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            left, // TODO: should be unbooleanized if necessary
            t.blockStatement([t.returnStatement(t.booleanLiteral(true))]),
            t.blockStatement([t.returnStatement(right)]))
    );
}

export default function(path: NodePath<t.ReturnStatement>) {
    const argument = path.node.argument;

    if (t.isSequenceExpression(argument)) {
        returnSequence(
            path as NodePath<ReturnStatement<t.SequenceExpression>>
        );
        return;
    }

    if (t.isConditionalExpression(argument)) {
        returnConditional(
            path as NodePath<ReturnStatement<t.ConditionalExpression>>
        );
        return;
    }
    
    if (t.isUnaryExpression(argument) && argument.operator === 'void') {
        returnVoid(
            path as NodePath<ReturnStatement<VoidExpression>>
        );
        return;
    }
    
    if (
        t.isAssignmentExpression(argument) &&
        (t.isIdentifier(argument.left) || t.isMemberExpression(argument.left))
    ) {
        returnAssignment(
            path as NodePath<ReturnStatement<ExtractableAssignment>>
        );
        return;
    }

    if (t.isIdentifier(argument) && argument.name === 'undefined') {
        returnUndefined(
            path as NodePath<ReturnStatement<UndefinedIdentifier>>
        );
        return;
    }
    
    if (t.isLogicalExpression(argument) && isBoolean(argument.left)) {
        if (isBooleanSequence(argument)) {
            // TODO: if it's a booleanSequence but the leftmost element is like `!(a > b)` `!(a || b)`, we shouldn't ignore it
            // check /.tmp/returned_boolean_sequences (fishy).txt
            return;
        }
        
        if (argument.operator === '&&')
            returnLogicalAND(
                path as NodePath<ReturnStatement<LogicalANDExpression>>
            );
        if (argument.operator === '||')
            returnLogicalOR(
                path as NodePath<ReturnStatement<LogicalORExpression>>
            );
        return;
    }
};