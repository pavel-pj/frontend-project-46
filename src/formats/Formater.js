import stylish from './formaters/Stylish.js';
import plain from './formaters/Plain.js';

const formater = (data, format) => {
  if (format === 'stylish') {
    return stylish(data);
  }
  if (format === 'plain') {
    return plain(data);
  }
  if (format === 'json') {
    return JSON.stringify(data, null, 4);
  }
  return '';
};
export default formater;
