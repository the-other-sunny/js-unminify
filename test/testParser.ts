import * as fs from 'node:fs';
import { strict as assert } from 'node:assert';

import * as parser from '@babel/parser';
import * as t from '@babel/types';

function testParser(inputPath: string) {
    function checkFormat(ast: parser.ParseResult<t.File>) {
        for (const testBlock of ast.program.body) {
            t.assertLabeledStatement(testBlock);
            t.assertBlockStatement(testBlock.body);

            assert(testBlock.body.body.length === 2);

            t.assertLabeledStatement(testBlock.body.body[0]);
            assert(testBlock.body.body[0].label.name === 'input');
            t.assertBlockStatement(testBlock.body.body[0].body);

            t.assertLabeledStatement(testBlock.body.body[1]);
            assert(testBlock.body.body[1].label.name === 'expected_output');
            t.assertBlockStatement(testBlock.body.body[1].body);
        }
    }

    function extractTestBlock(testBlock: t.LabeledStatement) {
        const name = testBlock.label.name;
        const [inputBlock, expectedOutputBlock] = (testBlock.body as t.BlockStatement).body as t.LabeledStatement[];
        
        const inputAst = t.file(t.program((inputBlock.body as t.BlockStatement).body));
        const expectedOutputAst = t.file(t.program((expectedOutputBlock.body as t.BlockStatement).body));

        return { name, inputAst, expectedOutputAst };
    }

    const sourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
    const ast = parser.parse(sourceCode);
    checkFormat(ast);
    const result = ast.program.body.map(testBlock => {
        return extractTestBlock(testBlock as t.LabeledStatement);
    });

    return result;
}

export default testParser;