const t = require('@babel/types');
const isExpandable = require('../utils').isExpandable;

function returnSequence(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const expressions = [...path.node.argument.expressions];
    const lastExpr = expressions.pop();
    path.replaceWithMultiple([
        ...expressions.map(expr => t.expressionStatement(expr)),
        t.returnStatement(lastExpr)
    ]);
}

function returnConditional(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const { test, consequent, alternate } = path.node.argument;
    const ifNode = t.ifStatement(
        test,
        t.blockStatement([
            t.returnStatement(consequent),
        ])
    );
    const returnNode = t.returnStatement(alternate);
    path.replaceWithMultiple([ifNode, returnNode]);
}

function returnVoid(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const expression = path.node.argument.argument;
    path.replaceWithMultiple([
        t.expressionStatement(expression),
        t.returnStatement()
    ]);
}

function returnUndefined(path) {
    path.replaceWith(t.returnStatement());
}

function ReturnStatement(path) {
    const argument = path.node.argument;
    if (t.isSequenceExpression(argument)) {
        returnSequence(path);
    } else if (t.isConditionalExpression(argument)) {
        returnConditional(path);
    } else if (t.isUnaryExpression(argument) && argument.operator === 'void') {
        returnVoid(path);
    } else if (t.isIdentifier(argument) && argument.name === 'undefined') {
        returnUndefined(path);
    }
}

module.exports = ReturnStatement;