const t = require('@babel/types');

const { isExpandable, negate } = require('../utils');

function sequenceExpression(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const expressions = path.node.expression.expressions;
    
    path.replaceWithMultiple(
        expressions.map(expr => t.expressionStatement(expr))
    );
}

function conditionalExpression(path) {
    const { test, consequent, alternate } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            test,
            t.blockStatement([t.expressionStatement(consequent)]),
            t.blockStatement([t.expressionStatement(alternate)])
        )
    );
}

function logicalANDExpression(path) {
    const { left, right } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            left,
            t.blockStatement([t.expressionStatement(right)])
        )
    );
}

function logicalORExpression(path) {
    const { left, right } = path.node.expression;

    path.replaceWith(
        t.ifStatement(
            negate(left),
            t.blockStatement([t.expressionStatement(right)])
        )
    );
}

function assignSequence(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const { operator, left, right } = path.node.expression;
    const expressions = [...right.expressions];
    const lastExpr = expressions.pop();

    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.expressionStatement(t.assignmentExpression(operator, left, lastExpr))
    ]);
}

function assignConditional(path) {
    // TODO: the current way to handle this should be improved, for instance to fully expand conditional assignment with a sequence or another conditional as a consequent or an alternate.
    function _assignConditional(path) {
        // TODO: the current way to handle this should be improved, for instance to fully expand conditional assignment with a sequence or another conditional as a consequent or an alternate.
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
        _assignConditional(path); // this is needed as the traversal will explore `path`'s childs and won't process `path` itself.
        const visitor = {
            ExpressionStatement(path) {
                const expression = path.node.expression;
                if (!t.isAssignmentExpression(expression))
                    return;
                if (t.isSequenceExpression(expression.right))
                    assignSequence(path);
                if (t.isConditionalExpression(expression.right))
                    _assignConditional(path);
            }
        };
        path.traverse(visitor);
    }
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

    if (t.isLogicalExpression(expression) && expression.operator === '&&') {
        logicalANDExpression(path);
        return;
    }

    if (t.isLogicalExpression(expression) && expression.operator === '||') {
        logicalORExpression(path);
        return;
    }

    if (t.isAssignmentExpression(expression) &&
        t.isSequenceExpression(expression.right)
    ) {
        assignSequence(path);
        return;
    }

    // if (t.isAssignmentExpression(expression) &&
    //     t.isConditionalExpression(expression.right)
    // ) {
    //     assignConditional(path);
    //     return;
    // }
}

module.exports = ExpressionStatement;