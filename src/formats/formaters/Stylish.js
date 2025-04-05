
import _  from 'lodash' ;

const sylish = (dataStart) =>{
  console.log(JSON.stringify(dataStart));

  const symbol = ' ';
  //console.log('A'.repeat(1));
  const getPrefixies = (type) =>{

    const prefixies = {
      added:'+ ',
      deleted: '- ',
      default1: '  ',
    }
    return prefixies[type] || prefixies.default1;
  }

  const normalizeNode(node) {
    
  }


  const iter = (data , level) =>
  {



    const result = data.map(( item) => {

    //Для структур deleted,added, которые добавлены без вложенных пометок нет поля type
      if (!Object.hasOwn(item,'type') ) {

         return iter(item, {current: level.next + 1});

      }

      if (item.type === 'nested') {
        const nestedKey = getPrefixies() + `${item.key}: {\n`;

        const body = iter(item.value , {current: level.next + 1}).join('')

        return indent + `${nestedKey}${body}`  +  symbol.repeat(4* (level.next +1)) + `}\n`;


      }


     if (item.type === 'updated') {


       const obj1 = {};
       obj1[item.key] = item.value[0];

       const obj2 = {};
       obj2[item.key] = item.value[1];

       const lastVal =  indent + getPrefixies('deleted')  + iter(obj1,{current: 0, next:level.next }) + "\n"
       const newVal = indent + getPrefixies('added') + iter(obj2,{current: 0, next:level.next  }) + "\n"
       return lastVal + newVal;

     }

        if (_.isPlainObject(item.value) === false) {
            return  indent + getPrefixies('added') + `${item.key}: ${item.value}` + "\n";
        }

        const nestedKey = getPrefixies('added') + `${item.key}: {\n`;
        const body = iter([item.value] , {current: level.next })
        return  indent +`${nestedKey}${body}\n` + indent +  smallIndent +"}\n";




   } );



   return result;


 }

 //const result = iter(dataStart, 0)
 const result = "{\n" + iter(dataStart, {current:0}).join('')  + "\n}" ;

 console.log(result )


// return result;


}

export default sylish;

