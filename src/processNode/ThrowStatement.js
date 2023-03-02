const t = require('@babel/types');
const isExpandable = require('../utils').isExpandable;

function ThrowStatement(path) {
    const argument = path.node.argument;
    if (!t.isSequenceExpression(argument)) {
        return;
    }
    if (!isExpandable(path)) {
        const warnMsg = `The following SwitchStatement is not expandable:\n${path.toString()}`;
        console.warn(warnMsg);
        return;
    }

    const expressions = [...argument.expressions];
    const newArgument = expressions.pop();
    path.replaceWithMultiple([
        ...expressions.map(expr => t.expressionStatement(expr)),
        t.throwStatement(newArgument)
    ]);
}

module.exports = ThrowStatement;