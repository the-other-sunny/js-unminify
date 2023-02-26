const t = require('@babel/types');

const sequenceExpression = require('./sequenceExpression');
const conditionalExpression = require('./conditionalExpression');
const logicalANDExpression = require('./logicalANDExpression');
const logicalORExpression = require('./logicalORExpression');

function ExpressionStatement(path) {
    const expression = path.node.expression;
    if (t.isSequenceExpression(expression)) {
        sequenceExpression(path);
    } else if (t.isConditionalExpression(expression)) {
        conditionalExpression(path);
    } else if (t.isLogicalExpression(expression) && (expression.operator === '&&')) {
        logicalANDExpression(path);
    } else if (t.isLogicalExpression(expression) && (expression.operator === '||')) {
        logicalORExpression(path);
    }
}

module.exports = ExpressionStatement;