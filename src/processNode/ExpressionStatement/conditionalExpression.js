const t = require('@babel/types');

function conditionalExpression(path) {
    const conditionalExpression = path.node.expression;
    const { test, consequent, alternate } = conditionalExpression;
    const newNode = t.ifStatement(
        test,
        t.blockStatement(
            [t.expressionStatement(consequent)]
        ),
        t.blockStatement(
            [t.expressionStatement(alternate)]
        )
    );

    path.replaceWith(newNode);
}

module.exports = conditionalExpression;