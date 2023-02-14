const isBlock = require('../utils').isBlock;
const t = require('@babel/types');

function expressionIsSequence(path) {
    if (!isBlock(path.parent)) {
        return;
    }
    
    const sequenceExpression = path.node.expression;
    const newNodes = sequenceExpression.expressions.map((expression) => {
        return t.expressionStatement(expression)
    });
    
    path.replaceWithMultiple(newNodes);
}

function expressionIsConditional(path) {
    const conditionalExpression = path.node.expression;
    const { test, consequent, alternate } = conditionalExpression;
    const newNode = t.ifStatement(
        test,
        t.expressionStatement(consequent),
        t.expressionStatement(alternate)
    );
    path.replaceWith(newNode);
}

function expressionIsLogical(path) {
    function logicalAND(path);
    function logicalOR(path);

}

function ExpressionStatement(path) {

}

module.exports = ExpressionStatement;