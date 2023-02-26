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

module.exports.isBlock = isBlock;
module.exports.isExpandable = isExpandable;