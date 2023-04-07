import * as t from '@babel/types';
import { NodePath } from '@babel/traverse';

import { isExpandable, negate } from '../../astUtils';

// TODO: move this one
interface LogicalANDExpression extends t.LogicalExpression {
    operator: '&&';
}

type Init = t.ForStatement['init'];
type Test = t.ForStatement['test'];
type Update = t.ForStatement['update'];

interface ForStatement<
    T extends Init,
    U extends Test,
    V extends Update,
> extends t.ForStatement {
    init: T,
    test: U,
    update: V
}

interface VarStatement extends t.VariableDeclaration {
    kind: "var"
}

function extractInit(
    path: NodePath<t.ForStatement>
) {
    let changed = false;
    if (!isExpandable(path)) {
        console.warn(
            `Given \`path\` is not expandable.\n` +
            `    Node type: ${path.node.type}\n` +
            `    Parent type: ${path.parent.type}\n` +
            `Node source code:\n` +
            `${path.toString()}`
        );
        return changed;
    }
 
    const init = path.node.init;
    
    if (!init) {
        return changed;
    }

    if (t.isVariableDeclaration(init) && init.kind === 'var') {
        changed = extractVariableDeclaration(
            path as NodePath<ForStatement<VarStatement, Test, Update>>
        );
    }

    if (t.isExpression(init)) {
        changed = extractExpression(
            path as NodePath<ForStatement<t.Expression, Test, Update>>
        );
    }

    return changed;

    function getIdentifiers(update: Update) {
        const identifiers: Set<string> = new Set();
        if (t.isUpdateExpression(update) && t.isIdentifier(update.argument)) {
            identifiers.add(update.argument.name);
        }
        if (t.isAssignmentExpression(update) && t.isIdentifier(update.left)) {
            identifiers.add(update.left.name);
        }
        if (t.isSequenceExpression(update)) {
            for (const expression of update.expressions)
                for (const identifier of getIdentifiers(expression))
                    identifiers.add(identifier);
        }
        return identifiers;
    }

    function extractVariableDeclaration(
        path: NodePath<ForStatement<VarStatement, Test, Update>>
    ) {
        const { init, test, update, body } = path.node;
        const { kind, declarations } = init;
        
        const maintainedIdentifiers = getIdentifiers(update); 
        
        let index = declarations.findIndex(decl => {
            const id = decl.id;
            return t.isIdentifier(id) && maintainedIdentifiers.has(id.name);
        });

        if (index === -1) {
            index = declarations.length;
        }

        if (index === 0) {
            return false;
        }

        const extractedDecls = declarations.slice(0, index);
        const maintainedDecls = declarations.slice(index);
        const newInit =
            maintainedDecls.length ?
            t.variableDeclaration(kind, maintainedDecls):
            null;

        path.replaceWithMultiple([
            t.variableDeclaration(kind, extractedDecls),    
            t.forStatement(newInit, test, update, body)
        ]);
        
        return true;
    }

    function extractExpression(
        path: NodePath<ForStatement<t.Expression, Test, Update>>
    ) {
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

        if (index === -1) {
            index = expressions.length;
        }

        if (index === 0) {
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

function sequenceTest(
    path: NodePath<ForStatement<Init, t.SequenceExpression, Update>>
) {
    const { init, test, update, body } = path.node;
    
    const ifBreak = t.ifStatement(
        negate(test),
        t.blockStatement([t.breakStatement()])
    );
    const newBody = t.blockStatement([
        ifBreak,
        ...(body as t.BlockStatement).body // TODO: type cast 
    ]);

    path.replaceWith(t.forStatement(init, null, update, newBody));
}

function logicalANDTest(
    path: NodePath<ForStatement<Init, LogicalANDExpression, Update>>
) {
    // TODO: if test is a && b && c && ..., this will lead to multiple `ifBreaks`...
    const { init, test, update, body } = path.node;
    const { left, right } = test;
    
    const newTest = left;
    const ifBreak = t.ifStatement(
        negate(right),
        t.blockStatement([t.breakStatement()])
    );
    const newBody = t.blockStatement([
        ifBreak,
        ...(body as t.BlockStatement).body // TODO: type cast
    ]);

    path.replaceWith(t.forStatement(init, newTest, update, newBody));
}

function emptyUpdate(
    path: NodePath<ForStatement<null | undefined, NonNullable<Test>, null | undefined>>
) {
    const { test, body } = path.node;
    
    path.replaceWith(t.whileStatement(test, body));
}

export default function(
    path: NodePath<t.ForStatement>
) {
    const { init, test, update } = path.node;
    const changed = extractInit(path);
    
    if (changed) {
        return;
    }

    if (t.isSequenceExpression(test)) {
        sequenceTest(
            path as NodePath<ForStatement<Init, t.SequenceExpression, Update>>
        );
        return;
    }

    if (t.isLogicalExpression(test) && test.operator === '&&') {
        logicalANDTest(
            path as NodePath<ForStatement<Init, LogicalANDExpression, Update>>
        );
        return;
    }

    if (!init && test && !update) {
        emptyUpdate(
            path as NodePath<ForStatement<null | undefined, NonNullable<Test>, null | undefined>>
        );
        return;
    }
};