import stylish from './formaters/Stylish.js'
const formater = (data, format) =>{
    if (format === 'stylish'){
        return stylish(data);
    }
}

export default formater;