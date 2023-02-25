const isExpandable = require('../../utils').isExpandable;
const t = require('@babel/types');

const sequenceExpression = require('./sequenceExpression');
const conditionalExpression = require('./conditionalExpression');
const logicalANDExpression = require('./logicalANDExpression');
const logicalORExpression = require('./logicalORExpression');

function ExpressionStatement(path) {
    if (!isExpandable(path)) {
        return; // TODO: perhaps, we should throw or warn about that ?
    }
}

module.exports = ExpressionStatement;