const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const exp = require('node:constants');

// const visitor = {
//     ForStatement(path) {
//         const node = path.node;
//         if (node.test === null && node.update !== null) {
//             debugger;
//         }        
//     },
// };

function getUpdateIdentifiers(update) {
    function getIdentifiers(update) {
        const identifiers = new Set();
        if (t.isUpdateExpression(update)) {
            const updExp = update;
            if (t.isIdentifier(updExp.argument)) {
                identifiers.add(updExp.argument.name);
            }
        } else if (t.isAssignmentExpression(update)) {
            const assExp = update;
            if (t.isIdentifier(assExp.left)) {
                identifiers.add(assExp.left.name);
            }
        } else if (t.isSequenceExpression(update)) {
            const seqExp = update;
            for (const expression of seqExp.expressions) {
                getIdentifiers(expression).forEach(id => { identifiers.add(id); });
            }
        }
        return identifiers;
    }

    return getIdentifiers(update);
}

function getTestIdentifiers(test) {
    function getIdentifiers(test) {
        const identifiers = new Set();
        if (t.isBinaryExpression(test)) {
            const binExp = test;
            if (t.isIdentifier(binExp.left)) {
                identifiers.add(binExp.left.name);
            }
            // if (t.isIdentifier(binExp.right)) {
            //     identifiers.add(binExp.right.name);
            // }
        } else if (t.isIdentifier(test)) {
            identifiers.add(test.name);
        } else if (t.isUpdateExpression(test)) {
            const updExp = test;
            if (t.isIdentifier(updExp.argument)) {
                identifiers.add(updExp.argument.name);
            }
        } else if (t.isSequenceExpression(test)) {
            const seqExp = test;
            for (const expression of seqExp.expressions) {
                getIdentifiers(expression).forEach(id => { identifiers.add(id); });
            }
        } else if (t.isLogicalExpression(test)) {
            const logExp = test;
            getIdentifiers(logExp.left).forEach(id => { identifiers.add(id); });
            getIdentifiers(logExp.right).forEach(id => { identifiers.add(id); });
        }
        
        return identifiers;
    }

    return getIdentifiers(test);
}


const visitor = {
    ForStatement(path) {
        if (path.node.update === null) {
            return;
        }
        if (path.node.test.type === 'UpdateExpression') {
            console.log(generate(path.node.test).code);
        }
    }
};

function main() {
    // let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\touch-update-downloader\sources_archives\0000-00-00_0.0.0\js\build\script.js`;
    let inputPath = String.raw`C:\Users\ryadb\OneDrive\Touch Projects\deuglify\io\input\script.js`;
    let sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

    const ast = parser.parse(sourceCode);
    traverse(ast, visitor);
}

main();