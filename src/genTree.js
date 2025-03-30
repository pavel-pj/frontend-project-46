import _  from 'lodash' ;

const gentree = (data1, data2) => {


  //if (isFile(data1)) {
  //  const comparison = compareNodes(data1, data2);
 //   return createNode = (data, type, comparison)
  //}


 // console.log(_.isPlainObject(data1?.common2));
  //return;


  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys =  _.union(keys1, keys2);
  keys.sort();



  const result = keys.map ((key) =>{

    if (_.isPlainObject(data1?.[key]) && _.isPlainObject(data2?.[key])){
      return {
        type:'nested',
        key,
        value : gentree (data1[key],data2[key])
      }
    }

    if(!Object.hasOwn(data2,key)) {
      return {
        type: 'deleted',
        key,
        value : data1[key]
      }
    }

    if(!Object.hasOwn(data1,key)) {
      return {
        type: 'added',
        key,
        value : data2[key]
      }
    }

    if(data1[key]  !== data2[key]) {
      return {
        type: 'updated',
        key,
        value: [obj1?.[key], obj2?.[key]],
      }
    }


    return {
      type: 'matched',
      key,
      value : data1[key]
    }

  });

  return result;


}

const createNode = (key, value , mark) =>{

   const obj = {}
   obj[key] = value;
   obj.mark = mark;
   return obj;

}


const isKeyExits =( data, key) => {
  return Object.hasOwn(data, key);

}

/*
const compareNodes = (data1, data2, key) => {
  const val1 = Object.hasOwn(data1, key);
  const val2 = Object.hasOwn(data2, key);

  if (val1 === true &&  val2 === false) {
    return 'deleted';
  } else if (val1 === false &&  val2 === true) {
    return 'added';
  }
  if (data1[key] === data2[key]) {
    return 'equal';
  }
  return 'changed';
}

const isFile = (node) => {
  if (!Array.isArray(node)) {
    return true;
  }
  return false;
}
*/


export default gentree;




