const t = require('@babel/types');

/**
 * Turn `Statement`s into `BlockStatement`s whenever possible so the `Statement` can be exploded if necessary.
 * @param {Path} path 
 * @returns 
 */
function Statement(path) {
    if (path.isBlockStatement()) {
        return;
    }
    
    let turnableIntoABlock = false;
    // TODO: replace with an `Array.includes`
    switch (path.parent.type) {
        case 'DoWhileStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
        case 'ForStatement':
        case 'IfStatement':
        case 'LabeledStatement':
        case 'WhileStatement':
        case 'WithStatement':
            turnableIntoABlock = true;
    }
    
    if (turnableIntoABlock) {
        path.replaceWith(
            t.blockStatement([path.node])
        );
    }
}

/**
 * Replaces `void 0` expressions with `undefined`, `!0` with `true` and `!1` with `false`.
 * @param {Path} path 
 */
function UnaryExpression(path) {
    const { operator, argument } = path.node;
    
    if (operator === 'void' && t.isNumericLiteral(argument) && argument.value === 0) {
        path.replaceWith(t.identifier('undefined'));
        return;
    }

    if (operator === '!' && t.isNumericLiteral(argument)) {
        if (argument.value === 0)
            path.replaceWith(t.booleanLiteral(true));
        if (argument.value === 1)
            path.replaceWith(t.booleanLiteral(false));
        return;
    }
}

module.exports.Statement = Statement;
module.exports.UnaryExpression = UnaryExpression;