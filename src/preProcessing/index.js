const t = require('@babel/types');
const assert = require('node:assert/strict');

/*
* TODO: Check if this security can be removed.
* For instance, it seems that a `VariableDeclaration` in a `ForStatement`'s `init` is fortunately not recognized as a `Statement` during the tree traversal.
* Although the `babel-types` documentation states that a `VariableDeclaration` is a `Statement`.
* Exploding a `node` in places where only a single `Statement` is expected would be problematic.
* 
* NOTE: this check seems to be unnecessary as the tree traverser won't consider a `ForStatement`'s init `VariableDeclaration` as a `Statement` for instance.
* `Statements` are reliably detected using `path.isStatement()`, whereas `t.isStatement(node)` fails in some situations, as `node` type doesn't provide enough information to determine, for instance, if a `VariableDeclaration` is a `Statement` or not for instance.
* 
* Cf. https://github.com/babel/babel/blob/c38bf12f010520ea7abe8a286f62922b2d1e1f1b/packages/babel-traverse/src/path/lib/virtual-types-validator.ts#L118
*/
function safetyCheck(path) {
    switch (path.parent.type) {
        case 'DoWhileStatement': // unnecessary
        case 'ForInStatement':
        case 'ForOfStatement':
        case 'ForStatement':
        case 'LabeledStatement': // unnecessary
        case 'WhileStatement': // unnecessary
        case 'WithStatement': // unnecessary
            assert(path.key === 'body')
            break;
        case 'IfStatement':
            assert(path.key === 'consequent' || path.key === 'alternate')
            break;
    }
}

/**
 * Turn `Statement`s into `BlockStatement`s whenever possible so the `Statement` can be exploded if necessary.
 * @param {Path} path 
 * @returns 
 */
function Statement(path) {
    if (path.isBlockStatement()) {
        return;
    }
    
    let turnableIntoABlock;
    switch (path.parent.type) {
        case 'DoWhileStatement':
        case 'ForInStatement':
        case 'ForOfStatement':
        case 'ForStatement':
        case 'LabeledStatement':
        case 'WhileStatement':
        case 'WithStatement':
            turnableIntoABlock = true;
            break;
        case 'IfStatement':
            // if parent node is an `IfStatement` and the current node is it's alternate child, it should not be turned into a block if it's an `IfStatement` as it would unnecessarily lengthen the code.
            turnableIntoABlock = !(path.type === 'IfStatement' && path.key === 'alternate');
            break;
        default:
            turnableIntoABlock = false;
    }
    
    if (turnableIntoABlock) {
        // safetyCheck(path); // unnecessary safety check
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
    if (operator === 'void' &&
        t.isNumericLiteral(argument) &&
        argument.value === 0
    ) {
        path.replaceWith(t.identifier('undefined'));
    }

    if (operator === '!' && t.isNumericLiteral(argument)) {
        path.replaceWith(t.booleanLiteral(!argument.value));
    }
}

module.exports.Statement = Statement;
module.exports.UnaryExpression = UnaryExpression;