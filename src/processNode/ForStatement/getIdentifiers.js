const t = require('@babel/types');

const extendSet = require('../../utils').extendSet;

function getUpdateIdentifiers(update) {
    function getIdentifiers(update) {
        const identifiers = new Set();
        if (t.isUpdateExpression(update)) {
            const { argument } = update;
            if (t.isIdentifier(argument)) {
                identifiers.add(argument.name);
            }
        } else if (t.isAssignmentExpression(update)) {
            const { left } = update;
            if (t.isIdentifier(left)) {
                identifiers.add(left.name);
            }
        } else if (t.isSequenceExpression(update)) {
            const { expressions } = update;
            for (const expression of expressions) {
                extendSet(identifiers, getIdentifiers(expression));
            }
        }
        return identifiers;
    }

    return getIdentifiers(update);
}

function getTestIdentifiers(test) {
    function getIdentifiers(test) {
        const identifiers = new Set();
        if (t.isBinaryExpression(test)) {
            const { left, right } = test;
            if (t.isIdentifier(left)) {
                identifiers.add(left.name);
            }
            // if (t.isIdentifier(right)) {
            //     identifiers.add(right.name);
            // }
        } else if (t.isIdentifier(test)) {
            identifiers.add(test.name);
        } else if (t.isUpdateExpression(test)) {
            const { argument } = test;
            if (t.isIdentifier(argument)) {
                identifiers.add(argument.name);
            }
        } else if (t.isSequenceExpression(test)) {
            const { expressions } = test;
            for (const expression of expressions) {
                extendSet(identifiers, getIdentifiers(expression));
            }
        } else if (t.isLogicalExpression(test)) {
            const { left, right } = test;
            extendSet(identifiers, getIdentifiers(left));
            extendSet(identifiers, getIdentifiers(right));
        }
        
        return identifiers;
    }

    return getIdentifiers(test);
}


function getIdentifiers(path) {
    const identifiers = new Set();
    const { test, update } = path.node;
    extendSet(identifiers, getTestIdentifiers(test));
    extendSet(identifiers, getUpdateIdentifiers(update));
    return identifiers;
}

module.exports = getIdentifiers;