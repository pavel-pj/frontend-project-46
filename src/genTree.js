import _  from 'lodash' ;

const gentree = (object1, object2) => {


  const iter = (data1,data2) => {

    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys =  _.union(keys1, keys2);
    keys.sort();


    const result = keys.map((key) => {

      if (_.isPlainObject(data1?.[key]) && _.isPlainObject(data2?.[key])) {
        return {
          type: 'nested',
          key,
          value: iter(data1[key], data2[key])
        }
      }

      if (!Object.hasOwn(data2, key)) {
        return {
          type: 'deleted',
          key,
          value: data1[key]
        }
      }

      if (!Object.hasOwn(data1, key)) {
        return {
          type: 'added',
          key,
          value: data2[key]
        }
      }

      if (data1[key] !== data2[key]) {
        return {
          type: 'updated',
          key,
          value: [data1?.[key], data2?.[key]],
        }
      }


      return {
        type: 'matched',
        key,
        value: data1[key]
      }

    });

    return result;
  };



  const diffResult = iter(object1,object2);
  console.log(diffResult);
  return diffResult;

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

export default gentree;




