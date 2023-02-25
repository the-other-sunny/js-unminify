const t = require('@babel/types');

function conditionalExpression(path) {
    const conditionalExpression = path.node.expression;
    const { test, consequent, alternate } = conditionalExpression;
    const newNode = t.ifStatement(
        test,
        t.expressionStatement(consequent),
        t.expressionStatement(alternate)
    );
    path.replaceWith(newNode);
}

module.exports = conditionalExpression;