import * as t from '@babel/types';
import type { NodePath } from '@babel/traverse';

/**
 * Turn `Statement`s into `BlockStatement`s whenever possible so the `Statement` can be expanded if necessary.
 * @param {Path} path 
 * @returns 
 */
export default function(path: NodePath<t.Statement>) {
    if (path.isBlockStatement()) {
        return;
    }
    
    const AllowerParentTypes = [
        'DoWhileStatement',
        'ForInStatement',
        'ForOfStatement',
        'ForStatement',
        'IfStatement',
        'LabeledStatement',
        'WhileStatement',
        'WithStatement',
    ]

    if (!AllowerParentTypes.includes(path.parent.type)) {
        return;
    }

    const newStatement = t.isEmptyStatement(path.node) ? 
                         t.blockStatement([]) :
                         t.blockStatement([path.node]);
    path.replaceWith(newStatement);
};