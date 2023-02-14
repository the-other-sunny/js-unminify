const t = require('@babel/types');

function isBlock(node) {
    return t.isBlockStatement(node) || t.isProgram(node) || t.isStaticBlock(node) || t.isSwitchCase(node);
}

module.exports.isBlock = isBlock