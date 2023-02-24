const t = require('@babel/types');
const assert = require('node:assert/strict');

/**
 * Turn `Statement`s into `BlockStatement`s whenever possible so the `Statement` could be exploded if necessary.
 * @param {Path} path 
 * @returns 
 */
function Statement(path) {
    function safetyCheck(path) {
        /*
        * TODO: Check if this security could be removed.
        * For instance, it seems that a `VariableDeclaration` in a `ForStatement`'s `init` is not recognized as a `Statement`.
        * Although the documentation states that a `VariableDeclaration` is a `Statement`.
        * Misapplying this transformation on that kind of Node would be problematic...
        * For now, it doesn't occure, but it's not certain that it is the expected behavior.
        */
        const parentNodeType = path.parent.type;
        const key = path.key;
        const check = {
            'DoWhileStatement': () => assert(key === 'body'),
            'ForInStatement':   () => assert(key === 'body'),
            'ForOfStatement':   () => assert(key === 'body'),
            'ForStatement':     () => assert(key === 'body'),
            'IfStatement':      () => assert(key === 'consequent' || key === 'alternate'),
            'LabeledStatement': () => assert(key === 'body'),
            'WhileStatement':   () => assert(key === 'body'),
            'WithStatement':    () => assert(key === 'body')
        }[parentNodeType];
        check();
    }

    if (path.isBlockStatement()) {
        return;
    }

    const parentNodeType = path.parent.type;
    let canBeAStatementBlock = [
        // Parent nodes susceptible to have a child `StatementBlock`.
        'DoWhileStatement',
        'ForInStatement',
        'ForOfStatement',
        'ForStatement',
        'IfStatement',
        'LabeledStatement',
        'WhileStatement',
        'WithStatement'
    ].includes(parentNodeType);
    canBeAStatementBlock &&= !(parentNodeType === 'IfStatement' && path.type === 'IfStatement');
    if (!canBeAStatementBlock) {
        return;
    }

    safetyCheck(path);
    path.replaceWith(
        t.blockStatement([path.node])
    );
}

module.exports.Statement = Statement;