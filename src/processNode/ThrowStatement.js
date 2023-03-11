const t = require('@babel/types');

const isExpandable = require('../utils').isExpandable;

function throwSequence(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }
    const expressions = [...path.node.argument.expressions];
    const lastExpr = expressions.pop();
    
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.throwStatement(lastExpr)
    ]);
}

function ThrowStatement(path) {
    // TODO: `ThrowStatements` share a lot of similarities with `ReturnStatement`s
    // should probably study that more in depth to better process `ThrowStatement`s
    const argument = path.node.argument;

    if (t.isSequenceExpression(argument)) {
        throwSequence(path);
        return;
    }
}

module.exports = ThrowStatement;