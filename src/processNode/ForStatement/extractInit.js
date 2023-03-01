const t = require('@babel/types');

function extractFromVariableDeclaration(init, identifiers) {
    // TODO: asert init.kind === 'var'
    function formVariableDeclaration(declarations) {
        return declarations.length ?
            t.variableDeclaration('var', declarations) :
            null;
    }

    const declarations = init.declarations;
    let i = 0, n = declarations.length;
    while (i < n) {
        const id = declarations[i].id;
        if (identifiers.has(id.name)) {
            break;
        }
        ++i;
    }

    const extractedStatement = formVariableDeclaration(declarations.slice(0, i));
    const remainingInit = formVariableDeclaration(declarations.slice(i));
    return [extractedStatement, remainingInit];
}

function extractFromSequenceExpression(init, identifiers) {
    const expressions = init.expressions;
    let i = 0, n = expressions.length;
    while (i < n) {
        const expression = expressions[i];
        if (t.isAssignmentExpression(expression) &&
            t.isIdentifier(expression.left) &&
            identifiers.has(expression.left.name)
        ) {
            break;
        }
        ++i;
    }

    let extractedStatement = null;
    const extractedExpressions = expressions.slice(0, i);
    if (extractedExpressions.length) {
        extractedStatement = t.expressionStatement(
            t.sequenceExpression(extractedExpressions)
        );
    }
    
    let remainingInit = null;
    const remainingExpressions = expressions.slice(i);
    if (remainingExpressions.length) {
        remainingInit = t.sequenceExpression(remainingExpressions);
    }
    
    return [extractedStatement, remainingInit];
}

function extractFromSimpleExpression(init, identifiers) {
    let extractedStatement = null, remainingInit = init;
    const maintainInit = t.isAssignmentExpression(init) &&
                         t.isIdentifier(init.left) &&
                         identifiers.has(init.left.name);
    if (!maintainInit) {
        extractedStatement = t.expressionStatement(init);
        remainingInit = null;
    }
    return [extractedStatement, remainingInit];
}

function extractInit(init, identifiers) {
    let extractedStatement, remainingInit;
    if (t.isVariableDeclaration(init)) {
        [extractedStatement, remainingInit] = extractFromVariableDeclaration(init, identifiers);
    } else if (t.isSequenceExpression(init)) {
        [extractedStatement, remainingInit] = extractFromSequenceExpression(init, identifiers);
    } else {
        [extractedStatement, remainingInit] = extractFromSimpleExpression(init, identifiers);
    }
    return [extractedStatement, remainingInit];
}

module.exports = extractInit;