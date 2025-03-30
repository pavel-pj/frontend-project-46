import gendiff from '../src/index.js';
import fs from 'fs';
import path from 'path';


 const getFixturePath = (filename) => path.resolve('__fixtures__', filename);
 const result01 = fs.readFileSync(getFixturePath('result01.txt'), 'utf-8').trim();

test('index test', ()=>{

   const file1 = '__fixtures__/file1.json';
   const file2 = '__fixtures__/file2.json';

   const result = gendiff(file1,file2);

   expect(result01).toEqual(result);
});

