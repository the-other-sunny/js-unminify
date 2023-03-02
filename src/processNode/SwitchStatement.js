const t = require('@babel/types');
const isExpandable = require('../utils').isExpandable;

function SwitchStatement(path) {
    const { discriminant, cases } = path.node;
    if (!t.isSequenceExpression(discriminant)) {
        return;
    }
    if (!isExpandable(path)) {
        const warnMsg = `The following SwitchStatement is not expandable:\n${path.toString()}`;
        console.warn(warnMsg);
        return;
    }

    const expressions = [...discriminant.expressions];
    const newDiscriminant = expressions.pop();
    path.replaceWithMultiple([
        ...expressions.map(expr => t.expressionStatement(expr)),
        t.switchStatement(newDiscriminant, cases)
    ]);
}

module.exports = SwitchStatement;