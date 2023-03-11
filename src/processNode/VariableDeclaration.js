const t = require('@babel/types');

const isExpandable = require('../utils').isExpandable;

function multipleDeclarators(path) {
    const node = path.node;
    const newNodes = node.declarations.map((varDeclarator) => {
        return t.variableDeclaration(node.kind, [varDeclarator])
    });

    path.replaceWithMultiple(newNodes);
}

function singleDeclaratorWithSequenceExpression(path) {
    const { kind, declarations } = path.node;
    const { id, init } = declarations[0];
    const expressions = [...init.expressions];
    const newInit = expressions.pop();

    path.replaceWithMultiple([
        t.sequenceExpression(expressions),
        t.variableDeclaration(kind, [t.variableDeclarator(id, newInit)])
    ]);
}

/**
 * If the `VariableDeclaration` declares multiple variables it is turned into
 * multiple `VariableDeclaration`s each declaring a single variable.
 * If the `VariableDeclaration` declares a single variable assigning a
 * `SequenceExpression` to it, the `SequenceExpression` is placed before the
 * `VariableDeclaration`, except for its last element which remains assigned
 * to the variable.
 * 
 * @param {Path} path 
 */
function VariableDeclaration(path) {
    if (!isExpandable(path)) {
        return; // it's ok if it's a `ForStatement`'s init... but otherwise??
    }
    
    const node = path.node;
    if (node.declarations.length > 1) {
        multipleDeclarators(path);
        return;
    }
    if (node.declarations.length === 1 &&
        t.isSequenceExpression(node.declarations[0].init)
    ) {
        singleDeclaratorWithSequenceExpression(path);
        return;        
    }
}

module.exports = VariableDeclaration;