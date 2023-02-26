const t = require('@babel/types');

const negate = require('../../utils').negate;

function logicalORExpression(path) {
    const logicalExpression = path.node.expression;
    const { left, right } = logicalExpression;
    const newNode = t.ifStatement(
        negate(left),
        t.blockStatement([t.expressionStatement(right)])
    );
    
    path.replaceWith(newNode);
}

module.exports = logicalORExpression;