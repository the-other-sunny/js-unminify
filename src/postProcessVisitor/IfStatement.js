const t = require('@babel/types');

function nestedIf(path) {
    const { test, consequent, alternate } = path.node;
    const altIf = alternate.body[0];
    path.replaceWith(
        t.ifStatement(
            test,
            consequent,
            altIf
        )
    );
}

function IfStatement(path) {
    const alternate = path.node.alternate;
    if (alternate &&
        t.isBlockStatement(alternate) &&
        alternate.body.length === 1 &&
        t.isIfStatement(alternate.body[0])
    ) {
        nestedIf(path);
    }
}

module.exports = IfStatement;