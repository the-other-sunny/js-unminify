const t = require('@babel/types');

function logicalANDExpression(path) {
    const logicalExpression = path.node.expression;
    const { left, right } = logicalExpression;
    const newNode = t.ifStatement(
        left,
        t.blockStatement([t.expressionStatement(right)])
    );
    
    path.replaceWith(newNode);
}

module.exports = logicalANDExpression;