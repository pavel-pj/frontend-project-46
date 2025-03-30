import _  from 'lodash' ;

export default (dataRaw1, dataRaw2) => {

  const data1 = normalizeValues(dataRaw1);
  const data2 = normalizeValues(dataRaw2);



  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys =  _.union(keys1, keys2);
  keys.sort();

  

  const result = keys.reduce((carry, key)=>{

    const comparison = compareNode(data1, data2, key);

    switch (comparison){
      case 'deleted':
        carry.push (`- ${key}.${data1[key]}`);
        break;
      case 'changed':
        carry.push (`- ${key}.${data1[key]}`);
        carry.push (`+ ${key}.${data2[key]}`);
        break;
      case 'equal':
        carry.push (`  ${key}.${data1[key]}`);
        break;
      case 'added':
        carry.push (`+ ${key}.${data2[key]}`);
        break;
    }

    return carry;

    },[]);

  return result;

}

const compareNode = (data1, data2, key) => {
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

const normalizeValues =(data)=> {

    const result = {};

    for (const [key, value] of Object.entries(data)) {

        if (value === false) {
            result[key] ='false';
        } else if(value === true ) {
            result[key] ='true';
        } else if(value === null ) {
            result[key] ='null';
        }
        result[key] = value;
    }
    return result;
}