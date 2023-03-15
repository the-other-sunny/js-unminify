const t = require('@babel/types');

function isBlock(node) {
    return t.isBlockStatement(node) || t.isProgram(node) || t.isStaticBlock(node) || t.isSwitchCase(node);
}

/**
 * Determines if the current node can safely be turned into multiple nodes.
 * @param {Path} path 
 */
function isExpandable(path) {
    if (path.parentPath.isBlockStatement() ||
        path.parentPath.isProgram() ||
        path.parentPath.isStaticBlock()
    ) {
        return true;
    }
    if (path.parentPath.isSwitchCase()) {
        return path.inList && path.listKey === 'consequent';
    }
    return false;
}

/**
 * Determines if an expression evaluates to a boolean litteral i.e. `true` or `false`.
 * This only checks if the expression is constructed from simple operations that
 * return a boolean.
 * @param {Node} node - an expression
 */
function isBoolean(node) {
    const booleanValuedOperators = ['==', '===', '!=', '!==', 'in', 'instanceof', '>', '<', '>=', '<='];

    if (t.isBooleanLiteral(node)) {
        return true;
    }
    if (t.isUnaryExpression(node) &&
        (node.operator === '!' || node.operator === 'delete')) {
        return true;
    }
    if (t.isLogicalExpression(node)) {
        const { left, right } = node;
        return isBoolean(left) && isBoolean(right);
    }
    if (t.isBinaryExpression(node)) {
        return booleanValuedOperators.includes(node.operator);
    }
    if (t.isSequenceExpression(node)) {
        const lastExpr = node.expressions.at(-1);
        return isBoolean(lastExpr);
    }
    if (t.isConditionalExpression(node)) {
        const { consequent, alternate } = node;
        return isBoolean(consequent) && isBoolean(alternate);
    }
    if (t.isAssignmentExpression(node) && node.operator === '=') {
        return isBoolean(node.right);
    }
    
    return false;
}

function isBooleanSequence(node) {
    if (t.isLogicalExpression(node)) {
        if (node.operator === '??')
            return false;
        return isBooleanSequence(node.left) && isBooleanSequence(node.right);
    }
    return (t.isUnaryExpression(node) || t.isBinaryExpression(node)) && isBoolean(node);
}

/**
 * Negates an expression.
 * @param {Node} node - an expression node
 */
function negate(node) {
    function simple_negation(node) {
        return t.unaryExpression('!', node);
    }
    const logicalOpInv = {
        '&&': '||',
        '||': '&&'
    };
    const binaryOpInv = {
        '==': '!=',
        '===': '!==',
        '!=': '==',
        '!==': '===',
        '>': '<=',
        '<': '>=',
        '>=': '<',
        '<=': '>'
    };

    if (t.isUnaryExpression(node) && node.operator === '!') {
        return node.argument;
    }
    if (t.isLogicalExpression(node)) {
        const { operator, left, right } = node;
        if (operator in logicalOpInv) {
            const invOperator = logicalOpInv[operator];
            return t.logicalExpression(invOperator, negate(left), negate(right));
        }
    }
    if (t.isBinaryExpression(node)) {
        const { operator, left, right} = node;
        if (operator in binaryOpInv) {
            const invOperator = binaryOpInv[operator];
            return t.binaryExpression(invOperator, left, right);
        }
    }
    if (t.isSequenceExpression(node)) {
        const expressions = [...node.expressions];
        const lastExpr = expressions.pop();
        return t.sequenceExpression([...expressions, negate(lastExpr)]);
    }
    if (t.isConditionalExpression(node)) {
        const { test, consequent, alternate } = node;
        return t.conditionalExpression(test, alternate, consequent);
    }
     
    return simple_negation(node);
}

function turnToBoolean(node) {
    // TODO: not quite optimal for sequences, conditionals...
    if (isBoolean(node))
        return node;
    return t.unaryExpression('!', negate(node));
}

function extendSet(set, iter) {
    for (const elt of iter) {
        set.add(elt);
    }
}

function willReturn(node) {
    if (!node) {
        return false;
    }
    if (t.isReturnStatement(node)) {
        return true;
    }
    if (t.isIfStatement(node)) {
        const { consequent, alternate } = node;
        return willReturn(consequent) && willReturn(alternate);
    }
    if (t.isBlockStatement(node) || t.isStaticBlock(node)) {
        return node.body.some(statement => willReturn(statement));
    }
    return false;
}

function isInLambda(path) {
    const parentNode = path.parentPath.node;
    const grandParentNode = path.parentPath.parentPath?.node;
    return t.isBlockStatement(parentNode) && t.isFunction(grandParentNode);
}

function getTail(path) {
    const parentNode = path.parent;
    if (!t.isBlockStatement(parentNode) && !t.isProgram(parentNode)) {
        throw new Error("wtf"); // TODO: improve errors
    }

    const index = parentNode.body.indexOf(path.node);
    if (index === -1) {
        throw new Error("wtf"); // TODO: improve errors
    }
    
    return parentNode.body.slice(index+1);
}

module.exports = {
    isBlock,
    isExpandable,
    isBoolean,
    isBooleanSequence,
    negate,
    turnToBoolean,
    extendSet,
    willReturn,
    isInLambda,
    getTail
}