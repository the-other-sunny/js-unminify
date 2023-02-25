const t = require('@babel/types');

function sequenceExpression(path) {
    const sequenceExpression = path.node.expression;
    const newNodes = sequenceExpression.expressions.map((expression) => {
        return t.expressionStatement(expression)
    });
    
    path.replaceWithMultiple(newNodes);
}

module.exports = sequenceExpression;