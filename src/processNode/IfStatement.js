const t = require('@babel/types');
const isExpandable = require('../utils').isExpandable;

function IfStatement(path) {
    const { test, consequent, alternate } = path.node;
    if (!t.isSequenceExpression(test)) {
        return;
    }
    if (!isExpandable(path)) {
        const warnMsg = `The following SwitchStatement is not expandable:\n${path.toString()}`;
        console.warn(warnMsg);
        return;
    }

    const expressions = [...test.expressions];
    const newTest = expressions.pop();
    path.replaceWithMultiple([
        ...expressions.map(expr => t.expressionStatement(expr)),
        t.ifStatement(newTest, consequent, alternate)
    ]);
}

module.exports = IfStatement;