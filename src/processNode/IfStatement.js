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
    const newTest = expressions.pop();
    path.replaceWithMultiple([
        ...expressions.map(expr => t.expressionStatement(expr)),
        t.ifStatement(newTest, consequent, alternate)
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
    path.replaceWithMultiple([
        t.ifStatement(test, consequent),
        ...alternate.body // alternate should be a block statement
    ]);
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
    path.replaceWith(negate(test), alternate, consequent);
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
    //     if (!c && !seq)
    //         return;
    //     cons;
    // }

    const { test, consequent } = path.node;
    
    if (!t.isBlockStatement(consequent)) {
        throw new Error("wtf"); // TODO: improve errors
    }
    
    const ifReturn = t.ifStatement(
        negate(test),
        t.blockStatement([
            t.returnStatement()
        ])
    );
    path.replaceWithMultiple([
        ifReturn,
        ...consequent.body
    ]);
}

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
    //     if (!c && !seq) {
    //         tail;
    //         [return;]
    //     }
    //     returning_cons;
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
    
    // remove tail
    const tailPaths = path.parentPath.get('body').slice(thisIndex+1);
    tailPaths.forEach(path => path.remove());
    
    path.replaceWithMultiple([
        t.ifStatement(negate(test), t.blockStatement(tailStatements)),
        ...consequent.body
    ]);
}

function IfStatement(path) {
    const { test, consequent, alternate } = path.node;
    // if (seq, c)
    //     cons;
    // ===>
    // seq;
    // if (c)
    //     cons;
    if (t.isSequenceExpression(test)) {
        sequenceExpressionTest(path);
        return;
    }
    
    // if (c && seq)
    //     cons;
    // ===>
    // if (c)
    //     if (seq)
    //         cons;
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
    // ===>
    // if (c)
    //     if (seq)
    //         returning_cons;
    // alt;
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
    // ===>
    // if (!c && !seq)
    //     returning_alt;
    // else
    //      cons;
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
        // ===>
        // function() {
        //     ...
        //     if (!c && !seq)
        //         return;
        //     cons;
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
        // ===>
        // function() {
        //     ...
        //     if (!c && !seq) {
        //         tail;
        //         [return;]
        //     }
        //     returning_cons;
        // }
        if (willReturn(consequent) && !alternate) {
            ORSequence3(path);
            return;
        }
    }
}

module.exports = IfStatement;