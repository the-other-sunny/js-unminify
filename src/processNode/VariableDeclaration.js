const isBlock = require('../utils').isBlock;
const t = require('@babel/types');

function multipleDeclarators(path) {
    if (!isBlock(path.parent)) {
        return;
    }

    const node = path.node;
    const newNodes = node.declarations.map((variableDeclarator) => {
        return t.variableDeclaration(node.kind, [variableDeclarator])
    });

    path.replaceWithMultiple(newNodes);
}

function singleDeclaratorWithSequenceExpression(path) {
    if (!isBlock(path.parent))
        return;

    const node = path.node;
    const kind = node.kind;
    const variableDeclarator = node.declarations[0];
    const id = variableDeclarator.id;
    const sequenceExpression = variableDeclarator.init;
    const expressionsToRemove = sequenceExpression.expressions.slice(0, -1);
    const lastExpression = sequenceExpression.expressions.at(-1);
    
    const newNodes = expressionsToRemove.map((expression) => {
        return t.expressionStatement(expression);
    });
    newNodes.push(
        t.variableDeclaration(kind, [t.variableDeclarator(id, lastExpression)])
    );

    path.replaceWithMultiple(newNodes);
}

/**
 * If the `VariableDeclaration` declares multiple variables it is turned into
 * multiple `VariableDeclaration`s each declaring a single variable.
 * If the `VariableDeclaration` declares a single variable and assigns a `SequenceExpression`
 * to it, the `SequenceExpression` is placed before the `VariableDeclaration`, except for it's
 * last `Expressions` which remains assigned to the variable.
 * 
 * @param {Path} path 
 */
function VariableDeclaration(path) {
    let transform = function() {};

    const node = path.node;
    if (node.declarations.length > 1) {
        transform = multipleDeclarators;
    } else if (node.declarations.length === 1) {
        const declarator = node.declarations[0];
        if (t.isSequenceExpression(declarator.init)) {
            transform = singleDeclaratorWithSequenceExpression;
        }
    }

    transform(path);
}

module.exports = VariableDeclaration;