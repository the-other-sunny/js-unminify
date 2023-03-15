const t = require('@babel/types');

const { extendSet, negate } = require('../utils');

function extractInit(path) {
    // TODO: implement use of identifiers
    const { init, test, update, body } = path.node;
    let changed = false;    

    if (!init) {
        return changed;
    }

    if (t.isVariableDeclaration(init)) {
        changed = extractVariableDeclaration(path);
    }

    if (t.isExpression(init)) {
        changed = extractExpression(path);
    }

    return changed;

    function getIdentifiers(update) {
        const identifiers = new Set();
        if (t.isUpdateExpression(update) && t.isIdentifier(update.argument)) {
            identifiers.add(update.argument.name);
        }
        if (t.isAssignmentExpression(update) && t.isIdentifier(update.left)) {
            identifiers.add(update.left.name);
        }
        if (t.isSequenceExpression(update)) {
            update.expressions.forEach(expression => {
                extendSet(identifiers, getIdentifiers(expression));
            });
        }
        return identifiers;
    }

    function extractVariableDeclaration(path) {
        const { init, test, update, body } = path.node;
        const { kind, declarations } = init;
        let changed = false;
        
        if (init.kind !== 'var') {
            return changed;
        }

        const maintainedIdentifiers = getIdentifiers(update); 
        
        let index = declarations.findIndex(decl => {
            const id = decl.id;
            return t.isIdentifier(id) && maintainedIdentifiers.has(id.name);
        });

        if (index == -1) {
            index = declarations.length;
        }

        if (index == 0) {
            return changed;
        }

        const extractedDecls = declarations.slice(0, index);
        const maintainedDecls = declarations.slice(index);
        const newInit = maintainedDecls.length ?
                        t.variableDeclaration(kind, maintainedDecls):
                        null;

        path.replaceWithMultiple([
            t.variableDeclaration(kind, extractedDecls),    
            t.forStatement(
                newInit,
                test,
                update,
                body
            )
        ]);
        
        changed = true;

        return changed;
    }

    function extractExpression(path) {
        const { init, test, update, body } = path.node;

        const expressions = t.isSequenceExpression(init) ?
                            init.expressions:
                            [init];
        let changed = false;
        const maintainedIdentifiers = getIdentifiers(update); 

        let index = expressions.findIndex(expr => {
            return t.isAssignmentExpression(expr) && 
                   t.isIdentifier(expr.left) &&
                   maintainedIdentifiers.has(expr.left.name); 
        });

        if (index == -1) {
            index = expressions.length;
        }

        if (index == 0) {
            return changed;
        }

        const extractedExpressions = expressions.slice(0, index);
        const maintainedExpressions = expressions.slice(index);

        const newInit = maintainedExpressions.length ?
                        t.sequenceExpression(maintainedExpressions):
                        null;

        path.replaceWithMultiple([
            t.expressionStatement(t.sequenceExpression(extractedExpressions)),
            t.forStatement(
                newInit,
                test,
                update,
                body
            )
        ]);
        
        changed = true;

        return changed;
    }
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
    const changed = extractInit(path);
    
    if (changed) {
        return;
    }

    if (t.isSequenceExpression(test)) {
        sequenceTest(path);
        return;
    }

    if (t.isLogicalExpression(test) && test.operator === '&&') {
        logicalANDTest(path);
        return;
    }

    if (!init && test && !update) {
        emptyUpdate(path);
        return;
    }
}

module.exports = ForStatement;