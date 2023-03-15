const t = require('@babel/types');

const { isExpandable, willReturn, isInLambda, getTail, negate } = require('../utils');

function sequenceExpressionTest(path) {
    if (!isExpandable(path)) {
        const warnMsg = `The following \`IfStatement\` is not expandable:\n${path.toString()}`;
        console.warn(warnMsg);
        return;
    }
    
    const { test, consequent, alternate } = path.node;
    const expressions = [...test.expressions];
    const lastExpr = expressions.pop();

    path.replaceWithMultiple([
        t.expressionStatement(t.sequenceExpression(expressions)),
        t.ifStatement(lastExpr, consequent, alternate)
    ]);
}

function ANDSequence1(path) {
    // if (c && seq)
    //     cons;
    // ===>
    // if (c)
    //     if (seq)
    //         cons;
    const { test, consequent } = path.node;
    const { left, right } = test;

    const innerIf = t.ifStatement(right, consequent);
    const outerIf = t.ifStatement(left, t.blockStatement([innerIf]));
    
    path.replaceWith(outerIf);
}

// TODO: can cause scope issues
// TODO: should be more cautious about moving blocks around as it might cause scope issues, we should keep track of the declared names.
function ANDSequence2(path) {
    // if (c && seq)
    //     returning_cons;
    // else
    //     alt;
    // ===>
    // if (c && seq)
    //     returning_cons;
    // alt;
    if (!isExpandable(path)) {
        throw new Error("wtf"); // TODO: improve errors
    }
    
    const { test, consequent, alternate } = path.node;    
    
    if (!t.isBlockStatement(alternate)) {
        throw new Error("wtf"); // TODO: improve errors
    }

    path.replaceWithMultiple(
        [t.ifStatement(test, consequent), ...alternate.body]
    );
}

function ORSequence1(path) {
    // if (c || seq)
    //     cons;
    // else
    //     returning_alt;
    // ===>
    // if (!c && !seq)
    //     returning_alt;
    // else
    //     cons;
    const { test, consequent, alternate } = path.node;

    path.replaceWith(t.ifStatement(negate(test), alternate, consequent));
}

function ORSequence2(path) {
    // function() {
    //     ...
    //     if (c || seq)
    //         cons;
    // }
    // ===>
    // function() {
    //     ...
    //     if (c || seq)
    //         cons;
    //     else
    //         return;
    // }
    
    const { test, consequent } = path.node;
    
    if (!t.isBlockStatement(consequent)) {
        throw new Error("wtf"); // TODO: improve errors
    }
    
    path.replaceWith(
        t.ifStatement(test, consequent, t.blockStatement([t.returnStatement()]))
    );
}

// TODO: need to detect and remove a last statement `return;` in returning_cons
function ORSequence3(path) {
    // function() {
    //     ...
    //     if (c || seq)
    //         returning_cons;
    //     tail;
    // }
    // ===>
    // function() {
    //     ...
    //     if (c || seq) {
    //         returning_cons;
    //     } else {
    //         tail;
    //         [return;]
    //     }
    // }

    const { test, consequent } = path.node;

    if (!t.isBlockStatement(consequent)) {
        throw new Error("wtf"); // TODO: improve error
    }
    if (!t.isBlockStatement(path.parent)) {
        throw new Error("wtf"); // TODO: improve error
    }

    const thisIndex = path.parent.body.indexOf(path.node);

    const tailStatements = path.parent.body.slice(thisIndex+1);    
    if (!tailStatements.some(willReturn)) {
        tailStatements.push(t.returnStatement());
    }
    
    // remove tail from function's body
    const tailPaths = path.parentPath.get('body').slice(thisIndex+1);
    tailPaths.forEach(path => path.remove());
    
    path.replaceWith(
        t.ifStatement(test, consequent, t.blockStatement(tailStatements))
    );
}

function IfStatement(path) {
    const { test, consequent, alternate } = path.node;
    // if (seq, c)
    //     cons;
    if (t.isSequenceExpression(test)) {
        sequenceExpressionTest(path);
        return;
    }
    
    // if (c && seq)
    //     cons;
    if (
        t.isLogicalExpression(test) &&
        test.operator === '&&' &&
        t.isSequenceExpression(test.right) &&
        !alternate
    ) {
        ANDSequence1(path);
        return;
    }
    
    // if (c && seq)
    //     returning_cons;
    // else
    //     alt;
    if (
        t.isLogicalExpression(test) &&
        test.operator === '&&' &&
        t.isSequenceExpression(test.right) &&
        alternate &&
        willReturn(consequent)
    ) {
        ANDSequence2(path);
        return;
    }
    
    // if (c || seq)
    //     cons;
    // else
    //     returning_alt;
    if (
        t.isLogicalExpression(test) &&
        test.operator === '||' &&
        t.isSequenceExpression(test.right) &&
        willReturn(alternate)
    ) {
        ORSequence1(path);
        return;
    }

    if (
        isInLambda(path) &&
        t.isLogicalExpression(test) &&
        test.operator === '||' &&
        t.isSequenceExpression(test.right)
    ) {
        const tail = getTail(path);
        
        // function() {
        //     ...
        //     if (c || seq)
        //         cons;
        // }
        if (!alternate && tail.length === 0) {
            ORSequence2(path);
            return;
        }
        
        // function() {
        //     ...
        //     if (c || seq)
        //         returning_cons;
        //     tail;
        // }
        if (willReturn(consequent) && !alternate) {
            ORSequence3(path);
            return;
        }
    }
}

module.exports = IfStatement;