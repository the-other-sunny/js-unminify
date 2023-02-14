const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert');

const parser = require('@babel/parser');
const generate = require('@babel/generator').default;
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');

function getScopeDepth(scope) {
    let i = 0;
    while ((scope = scope.parent)) ++i;
    return i;
}

function generateFunctionUid(path) {
    const scope = path.scope;
    const scopeDepth = getScopeDepth(scope);
    let index = 1;
    let uid = null;
    do {
        uid = `_fun_s${scopeDepth}_i${index}`;
        ++index;
    } while (
        scope.hasLabel(uid) ||
        scope.hasBinding(uid) ||
        scope.hasGlobal(uid) ||
        scope.hasReference(uid) // problematic
    )
    return uid;
}

function generateFunctionArgumentUid(path) {
    const scope = path.scope;
    const scopeDepth = getScopeDepth(scope);
    let index = 1;
    let uid = null;
    do {
        uid = `_arg_s${scopeDepth}_i${index}`;
        ++index; 
    } while (
        scope.hasLabel(uid) ||
        scope.hasBinding(uid) ||
        scope.hasGlobal(uid) ||
        scope.hasReference(uid) // problematic
    )
    return uid;
}



const visitor = {
    FunctionDeclaration(path) {
        debugger;
        const functionName = path.node.id.name;
        const args = path.node.params.map(node => node.name);

        let r = path.scope.rename(functionName, generateFunctionUid(path));
        args.map(arg => path.scope.rename(arg, generateFunctionArgumentUid(path)))
        debugger;
        // for (const [index, param] of path.node.params.entries()) {
        //     const name = param.name;
        //     let newName = path.scope.generateUid('arg');
        //     if (newName === '_arg') {
        //         newName = '_arg1';
        //     }
        //     path.scope.rename(name, newName);
        // }
    },
    // Identifier(path) {
    //     debugger;
    // }
}

// ------------------
// const inputPath = './io/input/script_with_spaces.js';
// const inputPath = 'C:/Users/ryadb/Desktop/Touch Projects/old sources/script.js'
const inputPath = 'C:/Users/ryadb/Desktop/Touch Projects/source_mod/split_modules/split_sources/2023-01-10_1.57.5_iY1VPed4/0000.js';

let sourceCode;
sourceCode = `
t;
function a(x) {
    function b(x) {
        function c(x) {}
    }
    function d(x) {
        function e(x) {}
    }
}
function f(x) {
    function g(x) {
        function h(x) {}
    }
    function i(x) {
        function j(x) {}
    }
}
`;
sourceCode = `
t;
function f1(x, y, z) {
    function g1(x, y, z) {
        function h1(x, y, z) {}
    }
    function g2(x, y, z) {
        function h1(x, y, z) {}
    }
}
function f2(x, y, z) {
    function g1(x, y, z) {
        function h1(x, y, z) {}
    }
    function g2(x, y, z) {
        function h1(x, y, z) {}
    }
}
`;
// sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });

const ast = parser.parse(sourceCode);
traverse(ast, visitor);
console.log(generate(ast).code);