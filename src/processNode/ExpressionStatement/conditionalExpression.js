const t = require('@babel/types');

const isExpandable = require('../../utils').isExpandable;

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

module.exports = conditionalExpression;