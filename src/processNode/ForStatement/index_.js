const isExpandable = require('../../utils').isExpandable;
const t = require('@babel/types');

const getIdentifiers = require('./getIdentifiers');

function extractInit(path) {
    const init = path.node.init;
    if (init === null || t.isVariableDeclaration(init)) {
        return init;
    } else if (t.isExpression(init)) {
        return t.expressionStatement(init);
    } else {
        throw init;
    }
}

function emptyTestAndUpdate(path) {
    const prevNode = extractInit(path);
    const forNode = t.forStatement(null, null, null, path.node.body);

    const newNodes = prevNode ? [prevNode, forNode] : [forNode]
    path.replaceWithMultiple(newNodes);
}

function emptyUpdate(path) {
    const prevNode = extractInit(path);
    const whileNode = t.whileStatement(path.node.test, path.node.body);

    const newNodes = prevNode ? [prevNode, whileNode] : [whileNode];
    path.replaceWithMultiple(newNodes);
}

// TODO: find some name
function find_some_name(path) {
    const { init, test, update, body } = path.node;
    const [extractedStatement, remainingInit] = extractInit__(init, identifiers); // TODO: extractInit__ ??
    const newForStatement = t.forStatement(remainingInit, test, update, body);
    if (extractedStatement) {
        path.replaceWithMultiple(extractedStatement, newForStatement);
    }
};

/**
 * Heuristically separates the longest prefix of variable declarations or 
 * expressions from the `ForStatement`'s init.
 * It's achieved by listing the variables present in the `test` and `update` 
 * parts.
 * 
 * @param {*} `ForStatements`'s path 
 * @returns 
 */
function ForStatement(path) {
    const node = path.node;
    if (!isExpandable(path)) {
        return;
    }
    
    if (t.isVariableDeclaration(node.init) && node.init.kind !== 'var') {
        return;
    } else if (node.test === null && node.update === null) {
        emptyTestAndUpdate(path);
    } else if (node.update === null) {
        emptyUpdate(path);
    } else {

    }
}

module.exports = ForStatement;