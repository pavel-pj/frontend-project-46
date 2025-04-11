import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const getFixturePath = (filename) => path.resolve('__fixtures__', filename);
const result01 = fs.readFileSync(getFixturePath('result01.txt'), 'utf-8').trim();

test('stylish test', () => {
  const file1 = '__fixtures__/file01.json';
  const file2 = '__fixtures__/file02.json';

  const result = gendiff(file1, file2);

  expect(result).toEqual(result01);
});
