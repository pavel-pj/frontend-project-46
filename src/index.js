import parse from './parsers/Parsers.js';
import gendiff from './GenDiff.js';

export default (file1, file2) => {
  const data1 = parse(file1);
  const data2 = parse(file2);

  const result = gendiff(data1,data2)
  console.log( JSON.stringify(result));
  return JSON.stringify(result);
 
};
