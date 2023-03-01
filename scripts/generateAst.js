const t = require('@babel/types');
const generate = require('@babel/generator').default;

let ast = t.expressionStatement(
    t.sequenceExpression(
        [t.nullLiteral()]
    )
);

let sourceCode = generate(ast).code;
console.log(sourceCode);