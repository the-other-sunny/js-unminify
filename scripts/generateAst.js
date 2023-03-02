const t = require('@babel/types');
const generate = require('@babel/generator').default;

const block1 = t.labeledStatement(
    t.identifier('1'),
    t.blockStatement([
        t.functionDeclaration(
            t.identifier('f'),
            [],
            t.blockStatement([])
        )
    ])
);

const block2 = t.labeledStatement(
    t.identifier('2'),
    t.blockStatement([
        t.functionDeclaration(
            t.identifier('f'),
            [],
            t.blockStatement([])
        )
    ])
);

const ast = t.program([block1, block2]);

let sourceCode = generate(ast).code;
console.log(sourceCode);