const t = require('@babel/types');
const generate = require('@babel/generator').default;


let ast = t.blockStatement(
    [
        t.expressionStatement(
            t.numericLiteral(1)
        ),
        t.expressionStatement(
            t.numericLiteral(2)
        ),
    ],
    [
        t.directive(
            t.directiveLiteral('use strict')
        )
    ]
);
let sourceCode = generate(ast).code;
console.log(sourceCode);