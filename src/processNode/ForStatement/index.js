const isExpandable = require('../../utils').isExpandable;
const t = require('@babel/types');

function ForStatement(path) {
    if (!isExpandable(path)) {
        return;
    }
    const { init, test, update, body } = path.node;
    if (t.isVariableDeclaration(init) && init.kind === 'var') {
        path.replaceWithMultiple([
            t.variableDeclaration('var', init.declarations),
            t.forStatement(null, test, update, body)
        ]);
    } else if (t.isExpression(init)) {
        path.replaceWithMultiple([
            t.expressionStatement(init),
            t.forStatement(null, test, update, body)
        ]);
    }
}

module.exports = ForStatement;