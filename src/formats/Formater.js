import stylish from './formaters/Stylish.js'
import plain from './formaters/Plain.js'
const formater = (data, format) =>{
    console.log(JSON.stringify(data));
    console.log()
    if (format === 'stylish'){
        return stylish(data);
    }

    if (format === 'plain'){
        //console.log(stylish(data))
        return plain(data);
    }

}

export default formater;