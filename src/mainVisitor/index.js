const ExpressionStatement = require('./ExpressionStatement');
const ForStatement = require('./ForStatement');
const IfStatement = require('./IfStatement');
const ReturnStatement = require('./ReturnStatement');
const SwitchStatement = require('./SwitchStatement');
const ThrowStatement = require('./ThrowStatement');
const VariableDeclaration = require('./VariableDeclaration');

const visitor = {
    ExpressionStatement,
    ForStatement,
    IfStatement,
    ReturnStatement,
    SwitchStatement,
    ThrowStatement,
    VariableDeclaration
}

module.exports = visitor;