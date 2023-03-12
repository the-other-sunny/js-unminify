const t = require('@babel/types');

/**
 * Turn `Statement`s into `BlockStatement`s whenever possible so the `Statement` can be expanded if necessary.
 * @param {Path} path 
 * @returns 
 */
function Statement(path) {
    if (path.isBlockStatement()) {
        return;
    }
    
    const AllowerParentTypes = [
        'DoWhileStatement',
        'ForInStatement',
        'ForOfStatement',
        'ForStatement',
        'IfStatement',
        'LabeledStatement',
        'WhileStatement',
        'WithStatement',
    ]

    if (!AllowerParentTypes.includes(path.parent.type)) {
        return;
    }

    const newStatement = t.isEmptyStatement(path.node) ? 
                         t.blockStatement([]) :
                         t.blockStatement([path.node]);
    path.replaceWith(newStatement);
}

/**
 * Apply the following transformations:
 *     `void 0` ---> `undefined`
 *     `!0`     ---> `true`
 *     `!1`     ---> `false`
 * @param {Path} path 
 */
function UnaryExpression(path) {
    const { operator, argument } = path.node;
    
    if (operator === 'void' && t.isNumericLiteral(argument) && argument.value === 0) {
        path.replaceWith(t.identifier('undefined'));
        return;
    }

    if (operator === '!' && t.isNumericLiteral(argument)) {
        if (argument.value === 0) {
            path.replaceWith(t.booleanLiteral(true));
        }
        if (argument.value === 1) {
            path.replaceWith(t.booleanLiteral(false));
        }
        return;
    }
}

module.exports.Statement = Statement;
module.exports.UnaryExpression = UnaryExpression;