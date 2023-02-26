const t = require('@babel/types');

function isBlock(node) {
    return t.isBlockStatement(node) || t.isProgram(node) || t.isStaticBlock(node) || t.isSwitchCase(node);
}

/**
 * Returns `true` if the current node can safely be turned into multiple nodes.
 * @param {Path} path 
 */
function isExpandable(path) {
    if (path.parentPath.isBlockStatement() ||
        path.parentPath.isProgram() ||
        path.parentPath.isStaticBlock()
    ) {
        return true;
    } else if (path.parentPath.isSwitchCase()) {
        return path.inList && (path.listKey === 'consequent');
    }
    return false;
}

/**
 * Negates an expression
 * @param {Node} expression node 
 */
function negate(node) {
    function simple_negation(node) {
        return t.unaryExpression('!', node);
    }

    if (t.isUnaryExpression(node) && node.operator === '!') {
        return node.argument;
    } else if (t.isConditionalExpression(node)) {
        // TODO: implement
    } else if (t.isSequenceExpression(node)) {
        // TODO: implement
    } else if (t.isBinaryExpression(node)) {
        // TODO: implement
    }

    return simple_negation(node);
}

module.exports.isBlock = isBlock;
module.exports.isExpandable = isExpandable;
module.exports.negate = negate;