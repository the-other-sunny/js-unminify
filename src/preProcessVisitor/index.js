const Statement = require('./Statement');
const UnaryExpression = require('./UnaryExpression');

const visitor = {
    Statement,
    UnaryExpression
}

module.exports = visitor;