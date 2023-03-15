const t = require('@babel/types');

const { isExpandable } = require('../utils');

function throwSequence(path) {
    if (!isExpandable(path)) {
        console.warn(
            `Given \`path\` is not expandable.\n` +
            `    Node type: ${path.node.type}\n` +
            `    Parent type: ${path.parent.type}\n` +
            `Node source code:\n` +
            `${path.toString()}`
        );
        return;
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