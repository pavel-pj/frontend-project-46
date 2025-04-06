
import _  from 'lodash' ;

const stylish = (dataStart) =>{
  console.log(JSON.stringify(dataStart));

  const symbol = ' ';
  //console.log('A'.repeat(1));
  const getPrefixies = (type) =>{

    const prefixies = {
      added:'+ ',
      deleted: '- ',
      default: '  ',
    }
    return prefixies[type] || prefixies.default;
  }

  const getIndent = (level) => getPrefixies('default').repeat(level);

  const normalizeNode =(node, level)=> {
    if (!_.isPlainObject(node) ) {
      return node;
    }

    const keys = Object.keys(node);
    const result = keys.map((item)=>{

      const value = _.isPlainObject(node[item]) ? normalizeNode(item,level + 2) : node[item];

      return `${getIndent(level+3)}${item}: ${value}\n`;


    }).join("\n")

    return "{\n" + result + getIndent(level +1 ) + "}";

  }


  const iter = (data , level) =>
  {

    const result = data.map(( item) => {

        const {type,value,key} = item


      if (type === 'nested') {

        const nestedKey = getIndent(level) + getPrefixies( ) + key + ": {\n";

        const body = iter(value , level +1)

        return ` ${nestedKey}${body}`   + `\n${getIndent(level +1)}}`;


      }



     if (type === 'updated') {

       const [removedNode, addedNode]  = value;


       const lastVal =  getIndent(level) + getPrefixies('deleted') + key +": "  + normalizeNode(removedNode,level) +"\n"
       const newVal = getIndent(level) + getPrefixies('added') + key + ": " + normalizeNode(addedNode,level)
       return lastVal + newVal;

     }

      return  getIndent(level) + getPrefixies(type) + key + ": " + normalizeNode(value,level)  ;


   } );

   return result.join('\n');


 }

 const result = "{\n" + iter(dataStart, 0)   + "\n}" ;

 console.log(result )


}

export default stylish;

