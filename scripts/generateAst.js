const t = require('@babel/types');
const generate = require('@babel/generator').default;

let ast = t.ifStatement(
    t.numericLiteral(1),
    t.blockStatement(
        [t.expressionStatement(t.numericLiteral(2))]
    ),
    t.blockStatement(
        [t.expressionStatement(t.numericLiteral(3))]
    )
);

let sourceCode = generate(ast).code;
console.log(sourceCode);