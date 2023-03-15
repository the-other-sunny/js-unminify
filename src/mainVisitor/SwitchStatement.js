const t = require('@babel/types');

const { isExpandable } = require('../utils');

function sequenceDiscriminant(path) {
    const { discriminant, cases } = path.node;
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

    const expressions = [...discriminant.expressions];
    const lastExpr = expressions.pop();
    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.switchStatement(lastExpr, cases)
    ]);
}

function SwitchStatement(path) {
    const discriminant = path.node.discriminant;
    
    if (t.isSequenceExpression(discriminant)) {
        sequenceDiscriminant(path);
        return;
    }
}

module.exports = SwitchStatement;