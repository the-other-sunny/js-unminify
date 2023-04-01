import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';

function isBlock(node: t.Node) {
    return t.isBlockStatement(node) || t.isProgram(node) || t.isStaticBlock(node) || t.isSwitchCase(node);
}

/**
 * Determines if the current node can safely be turned into multiple nodes.
 * @param {Path} path 
 */
function isExpandable(path: NodePath) {
    if (path.parentPath === null) {
        throw new Error(); // TODO: only happens if path is a NodePath<t.Program>
    }
    if (path.parentPath.isBlockStatement() ||
        path.parentPath.isProgram() ||
        // @ts-ignore: `isStaticBlock` is defined https://github.com/babel/babel/blob/main/packages/babel-traverse/src/path/generated/validators.d.ts#L782
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
function isBoolean(node: t.Expression): boolean {
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
        const lastExpr = node.expressions.at(-1) as t.Expression ;
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

function isBooleanSequence(node: t.Node): boolean {
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
function negate(node: t.Expression): t.Expression {
    function simple_negation(node: t.Expression) {
        return t.unaryExpression('!', node);
    }

    type LogicalOperator = t.LogicalExpression['operator'];
    function invertLogicalOperator(operator: LogicalOperator) {
        switch (operator) {
            case '&&': return '||';
            case '||': return '&&';
            default: return;
        }
    }

    type BinaryOperator = t.BinaryExpression['operator'];
    function invertBinaryOperator(operator: BinaryOperator) {
        switch (operator) {
            case '==': return '!=';
            case '===': return '!==';
            case '!=': return '==';
            case '!==': return '===';
            case '>': return '<=';
            case '<': return '>=';
            case '>=': return '<';
            case '<=': return '>';
            default: return;
        }
    }

    if (t.isUnaryExpression(node) && node.operator === '!') {
        return node.argument;
    }

    if (t.isLogicalExpression(node)) {
        const { operator , left, right } = node;
        const invOperator = invertLogicalOperator(operator); 
        if (invOperator) {
            return t.logicalExpression(invOperator, negate(left), negate(right));
        }
    }

    if (t.isBinaryExpression(node)) {
        const { operator, left, right} = node;
        const invOperator = invertBinaryOperator(operator);
        if (invOperator) {
            return t.binaryExpression(invOperator, left, right);
        }
    }

    if (t.isSequenceExpression(node)) {
        const expressions = [...node.expressions];
        const lastExpr = expressions.pop() as t.Expression;
        return t.sequenceExpression([...expressions, negate(lastExpr)]);
    }

    if (t.isConditionalExpression(node)) {
        const { test, consequent, alternate } = node;
        return t.conditionalExpression(test, alternate, consequent);
    }
     
    return simple_negation(node);
}

function turnToBoolean(node: t.Expression) {
    // TODO: not quite optimal for sequences, conditionals...
    if (isBoolean(node))
        return node;
    return t.unaryExpression('!', negate(node));
}

function willReturn(node: t.Statement |null | undefined): boolean {
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

function isInLambda(path: NodePath<t.Statement>) {
    if (path.parentPath === undefined) {
        throw new Error();
    }

    const parentNode = path.parentPath.node;
    const grandParentNode = path.parentPath.parentPath?.node;

    return t.isBlockStatement(parentNode) && t.isFunction(grandParentNode);
}

function getTail(path: NodePath<t.Statement>) {
    const parentNode = path.parent;
    if (!t.isBlockStatement(parentNode) && !t.isProgram(parentNode)) {
        throw new Error('`path` should be inside a block.');
    }
    
    path.node;
    const index = parentNode.body.indexOf(path.node);
    if (index === -1) {
        throw new Error("Unable to find the current node among it's parent's childs.");
    }
    
    return parentNode.body.slice(index+1);
}

export {
    isBlock,
    isExpandable,
    isBoolean,
    isBooleanSequence,
    negate,
    turnToBoolean,
    willReturn,
    isInLambda,
    getTail
};