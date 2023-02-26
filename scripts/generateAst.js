const t = require('@babel/types');
const generate = require('@babel/generator').default;

let ast = t.expressionStatement(
    t.functionExpression(
        t.identifier('f'),
        [],
        t.blockStatement([])
    )
)
let sourceCode = generate(ast).code;
console.log(sourceCode);