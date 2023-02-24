// https://github.com/davidaq/deuglifyjs

const traverse = require('@babel/traverse').default;

function isChildOfBody (path) {
  return ['Program', 'BlockStatement'].indexOf(path.parentPath.node.type) > -1
}

function WhileStatement (path) {
  const node = Object.assign({}, path.node)
  let changed = false
  if (node.body && node.body.type !== 'BlockStatement') {
    changed = true
    node.body = {
      type: 'BlockStatement',
      body: [node.body]
    }
  }
  if (changed) {
    path.replaceWith(node)
  }
}

const visitor = {
  VariableDeclaration (path) {
    if (isChildOfBody(path) && path.node.declarations.length > 1 && path.node.kind === 'var') {
      path.replaceWithMultiple(path.node.declarations.map((decl) => {
        const vdecl = Object.assign({}, path.node)
        vdecl.declarations = [decl]
        return vdecl
      }))
    }
  },
  LogicalExpression (path) {
    if (path.parentPath.node.type === 'ExpressionStatement') {
      if (path.node.operator === '&&') {
        path.parentPath.replaceWith({
          type: 'IfStatement',
          test: path.node.left,
          consequent: {
            type: 'ExpressionStatement',
            expression: path.node.right
          }
        })
      } else if (path.node.operator === '||') {
        path.parentPath.replaceWith({
          type: 'IfStatement',
          test: {
            type: 'UnaryExpression',
            operator: '!',
            prefix: true,
            argument: path.node.left
          },
          consequent: {
            type: 'ExpressionStatement',
            expression: path.node.right
          }
        })
      }
    }
  },
  ConditionalExpression (path) {
    if (path.parentPath.node.type === 'ExpressionStatement') {
      path.parentPath.replaceWith({
        type: 'IfStatement',
        test: path.node.test,
        consequent: { 
          type: 'ExpressionStatement',
          expression: path.node.consequent
        },
        alternate: {
          type: 'ExpressionStatement',
          expression: path.node.alternate
        }
      })
    }
  },
  UnaryExpression (path) {
    if (path.node.operator === '!' && path.node.prefix && path.node.argument.type === 'NumericLiteral') {
      path.replaceWith({
        type: 'BooleanLiteral',
        value: !path.node.argument.value
      })
    }
  },
  IfStatement (path) {
    const node = Object.assign({}, path.node)
    let changed = false
    if (node.alternate) {
      if (node.alternate.type !== 'BlockStatement' && node.alternate.type !== 'IfStatement') {
        changed = true
        node.alternate = {
          type: 'BlockStatement',
          body: [node.alternate]
        }
      }
    }
    if (node.consequent.type !== 'BlockStatement') {
      changed = true
      node.consequent = {
        type: 'BlockStatement',
        body: [node.consequent]
      }
    }
    if (changed) {
      path.replaceWith(node)
    }
  },
  ForStatement: {
    enter (path) {
      WhileStatement(path)
    },
    exit (path) {
      const node = Object.assign({}, path.node)
      if (node.init && node.init.type === 'VariableDeclaration' && node.init.kind === 'var' && node.init.declarations.length > 1) {
        node.init = Object.assign({}, node.init)
        const usedIdentifier = {}
        traverse({
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: node.test
            },
            {
              type: 'ExpressionStatement',
              expression: node.update
            },
          ]
        }, {
          Identifier (ipath) {
            usedIdentifier[ipath.node.name] = true
          }
        })
        for (let i = 0; i < node.init.declarations.length; i++) {
          if (usedIdentifier[node.init.declarations[i].id.name]) {
            if (i > 0) {
              const precede = node.init.declarations.slice(0, i)
              node.init.declarations = node.init.declarations.slice(i)
              path.replaceWithMultiple([
                {
                  type: 'VariableDeclaration',
                  kind: 'var',
                  declarations: precede
                },
                node
              ])
            }
            break
          }
        }
      }
    }
  },
  WhileStatement: WhileStatement,
  ForInStatement (path) {
    WhileStatement(path)
  },
  ForOfStatement (path) {
    WhileStatement(path)
  },
  ReturnStatement (path) {
    if (isChildOfBody(path) && path.node.argument) {
      if (path.node.argument.type === 'SequenceExpression') {
        const retVal = path.node.argument.expressions.pop()
        path.replaceWithMultiple([
          {
            type: 'ExpressionStatement',
            expression: path.node.argument,
          },
          Object.assign({}, path.node, {
            argument: retVal
          })
        ])
      } else if (path.node.argument.type === 'ConditionalExpression') {
        path.replaceWithMultiple([
          {
            type: 'IfStatement',
            test: path.node.argument.test,
            consequent: {
              type: 'ReturnStatement',
              argument: path.node.argument.consequent
            }
          },
          {
            type: 'ReturnStatement',
            argument: path.node.argument.alternate
          }
        ])

      } else if (path.node.argument.type === 'LogicalExpression' && path.node.argument.operator === '&&') {
        path.replaceWithMultiple([
          {
            type: 'IfStatement',
            test: path.node.argument.left,
            consequent: {
              type: 'BlockStatement',
              body: [{
                type: 'ReturnStatement',
                argument: path.node.argument.right
              }]
            }
          },
          {
            type: 'ReturnStatement',
            argument: {
              type: 'BooleanLiteral',
              value: false
            }
          }
        ])
      }
    }
  },
  SequenceExpression (path) {
    if (path.parentPath.node.type === 'ExpressionStatement') {
      path.replaceWithMultiple(path.node.expressions.map((expr) => {
        return {
          type: 'ExpressionStatement',
          expression: expr
        }
      }))
    }
  }
}

module.exports = visitor;