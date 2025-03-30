import parse from './parsers/Parsers.js';
import gendiff from './GenDiff.js';
import gentree from './genTree.js';
//import normalize from './utils/normalize.js';
export default (file1, file2) => {
  const data1 = parse(file1);
  const data2 = parse(file2);




  //console.log(data2);

  const result = gentree(data1,data2 )
  console.log(result)
 // console.log("============================")
 // console.log("Результат")
  //console.log(result);
  //const result = gendiff(data1,data2)
   // console.log(  result);
  //return JSON.stringify(result);
 
};
