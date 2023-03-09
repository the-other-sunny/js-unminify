const t = require('@babel/types');

const { isExpandable, negate } = require('../../utils');

function sequenceExpression(path) {
    const sequenceExpression = path.node.expression;
    const newNodes = sequenceExpression.expressions.map((expression) => {
        return t.expressionStatement(expression)
    });
    
    path.replaceWithMultiple(newNodes);
}

function conditionalExpression(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const conditionalExpression = path.node.expression;
    const { test, consequent, alternate } = conditionalExpression;
    const newNode = t.ifStatement(
        test,
        t.blockStatement([t.expressionStatement(consequent)]),
        t.blockStatement([t.expressionStatement(alternate)])
    );

    path.replaceWith(newNode);
}

function logicalANDExpression(path) {
    const logicalExpression = path.node.expression;
    const { left, right } = logicalExpression;
    const newNode = t.ifStatement(
        left,
        t.blockStatement([t.expressionStatement(right)])
    );
    
    path.replaceWith(newNode);
}

function logicalORExpression(path) {
    const logicalExpression = path.node.expression;
    const { left, right } = logicalExpression;
    const newNode = t.ifStatement(
        negate(left),
        t.blockStatement([t.expressionStatement(right)])
    );
    
    path.replaceWith(newNode);
}

function assignSequence(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const { operator, left, right } = path.node.expression;
    const expressions = [...right.expressions];
    const newRight = expressions.pop();
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.expressionStatement(t.assignmentExpression(operator, left, newRight))
    ]);
}

function assignConditional(path) {

}

function ExpressionStatement(path) {
    const expression = path.node.expression;
    if (t.isSequenceExpression(expression)) {
        sequenceExpression(path);
        return;
    }
    if (t.isConditionalExpression(expression)) {
        conditionalExpression(path);
        return;
    }
    if (t.isLogicalExpression(expression) && (expression.operator === '&&')) {
        logicalANDExpression(path);
        return;
    }
    if (t.isLogicalExpression(expression) && (expression.operator === '||')) {
        logicalORExpression(path);
        return;
    }
    if (t.isAssignmentExpression(expression) && t.isSequenceExpression(expression.right)) {
        assignSequence(path);
        return;
    }
    if (t.isAssignmentExpression(expression) && t.isConditionalExpression(expression.right)) {
        // assignConditional(path);
        // return;
    }
}

module.exports = ExpressionStatement;