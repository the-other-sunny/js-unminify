const t = require('@babel/types');

const { isExpandable, isBoolean, negate, isBooleanSequence} = require('../utils');

function returnSequence(path) {
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
    const lastExpr = expressions.pop();
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.returnStatement(lastExpr)
    ]);
}

function returnConditional(path) {
    const { test, consequent, alternate } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            test,
            t.blockStatement([t.returnStatement(consequent)]),
            t.blockStatement([t.returnStatement(alternate)])
        )
    );
}

function returnVoid(path) {
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

    const expression = path.node.argument.argument;
    path.replaceWithMultiple([
        t.expressionStatement(expression),
        t.returnStatement()
    ]);
}

function returnAssignment(path) {
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
    
    // TODO: left is an LVal, we should check if any LVal can be returned...
    const { operator, left, right } = path.node.argument;
    
    path.replaceWithMultiple([
        t.expressionStatement(t.assignmentExpression(operator, left, right)),
        t.returnStatement(left)
    ]);
}

function returnUndefined(path) {
    path.replaceWith(t.returnStatement());
}

function returnLogicalAND(path) {
    const { left, right } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            negate(left),
            t.blockStatement([t.returnStatement(t.booleanLiteral(false))]),
            t.blockStatement([t.returnStatement(right)]))
    );
}

function returnLogicalOR(path) {
    const { left, right } = path.node.argument;

    path.replaceWith(
        t.ifStatement(
            left, // TODO: should be unbooleanized if necessary
            t.blockStatement([t.returnStatement(t.booleanLiteral(true))]),
            t.blockStatement([t.returnStatement(right)]))
    );
}

function ReturnStatement(path) {
    const argument = path.node.argument;

    if (t.isSequenceExpression(argument)) {
        returnSequence(path);
        return;
    }

    if (t.isConditionalExpression(argument)) {
        returnConditional(path);
        return;
    }
    
    if (t.isUnaryExpression(argument) && argument.operator === 'void') {
        returnVoid(path);
        return;
    }
    
    if (t.isAssignmentExpression(argument)) {
        returnAssignment(path);
        return;
    }

    if (t.isIdentifier(argument) && argument.name === 'undefined') {
        returnUndefined(path);
        return;
    }
    
    if (t.isLogicalExpression(argument) && isBoolean(argument.left)) {
        if (isBooleanSequence(argument)) {
            // TODO: if it's a booleanSequence but the leftmost element is like `!(a > b)` `!(a || b)`, we shouldn't ignore it
            // check /.tmp/returned_boolean_sequences (fishy).txt
            return;
        }
        
        if (argument.operator === '&&')
            returnLogicalAND(path);
        if (argument.operator === '||')
            returnLogicalOR(path);
        return;
    }
}

module.exports = ReturnStatement;