const t = require('@babel/types');

const { extendSet, negate } = require('../utils');

function getIdentifiers(update) {
    let identifiers = new Set();
    if (t.isUpdateExpression(update) && t.isIdentifier(update.argument)) {
        identifiers.add(update.argument.name);
    }
    if (t.isAssignmentExpression(update) && t.isIdentifier(update.left)) {
        identifiers.add(update.left.name);
    }
    if (t.isSequenceExpression(update)) {
        for (const expression of update.expressions)
            extendSet(identifiers, getIdentifiers(expression));
    }
    return identifiers;
}

function extractInit(path, identifiers = new Set()) {
    // TODO: implement use of identifiers
    const { init, test, update, body } = path.node;
    
    if (!init)
        return;
    
    if (t.isVariableDeclaration(init) && init.kind !== 'var')
        return;
    
    const prevNode = t.isExpression(init) ? t.expressionStatement(init) : init;
    const forNode = t.forStatement(null, test, update, body);
    path.replaceWithMultiple([prevNode, forNode]);
}

function sequenceTest(path) {
    const { init, test, update, body } = path.node;
    
    const ifBreak = t.ifStatement(
        negate(test),
        t.blockStatement([t.breakStatement()])
    );
    const newBody = t.blockStatement([
        ifBreak,
        ...body.body
    ]);

    path.replaceWith(t.forStatement(init, null, update, newBody));
}

function logicalANDTest(path) {
    // TODO: if test is a && b && c, this will lead to two `ifBreaks`...
    const { init, test, update, body } = path.node;
    const { left, right } = test;
    
    const newTest = left;
    const ifBreak = t.ifStatement(
        negate(right),
        t.blockStatement([t.breakStatement()])
    );
    const newBody = t.blockStatement([
        ifBreak,
        ...body.body
    ]);

    path.replaceWith(t.forStatement(init, newTest, update, newBody));
}

function emptyUpdate(path) {
    const { test, body } = path.node;
    path.replaceWith(t.whileStatement(test, body));
}

function ForStatement(path) {
    const { init, test, update } = path.node;

    if (t.isSequenceExpression(test)) {
        sequenceTest(path);
        return;
    }

    if (t.isLogicalExpression(test) && test.operator === '&&') {
        logicalANDTest(path);
        return;
    }

    if (init && !update) {
        extractInit(path);
        return;
    }

    if (!init && test && !update) {
        emptyUpdate(path);
        return;
    }

    extractInit(path);
}

module.exports = ForStatement;