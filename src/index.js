import parse from './parsers/Parsers.js';
import gentree from './genTree.js';
import formater from './formats/Formater.js';

export default (file1, file2, format = 'stylish') => {
  const data1 = parse(file1);
  const data2 = parse(file2);
  const result = gentree(data1, data2);
  const formated = formater(result, format);
  return formated;
};
