const t = require('@babel/types');
const isExpandable = require('../utils').isExpandable;

function sequenceDiscriminant(path) {
    const { discriminant, cases } = path.node;
    if (!isExpandable(path)) {
        const warnMsg = `The following \`SwitchStatement\` is not expandable:\n${path.toString()}`;
        console.warn(warnMsg);
        return; // TODO: perhaps, we should throw or warn about that ?
    }

    const expressions = [...discriminant.expressions];
    const lastExpr = expressions.pop();
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.switchStatement(lastExpr, cases)
    ]);
}

function SwitchStatement(path) {
    const discriminant = path.node.discriminant;
    
    if (!t.isSequenceExpression(discriminant)) {
        sequenceDiscriminant(path);
        return;
    }
}

module.exports = SwitchStatement;