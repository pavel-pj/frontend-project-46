import _ from 'lodash';

export default (tree) => {
  const output = [];
  const iter = (data, carry, keys = []) => {
    if (!Array.isArray(data) && !Object.hasOwn('type')) {
      return data;
    }
    const getObjectDescript = (item) => {
      if (_.isPlainObject(item)) {
        return '[complex value]';
      }
      return `'${item}'`;
    };
    const result = data.map((item) => {
      const { type, key, value } = item;

      if (type === 'nested') {
        keys.push(key);
        iter(value, carry, keys);
        keys.splice(keys.length - 1);
      }

      if (type === 'updated') {
        keys.push(key);
        const path = keys.join('.');
        carry.push(`Property '${path}' was updated. From ${getObjectDescript(value[0])} to ${getObjectDescript(value[1])}`);
        keys.splice(keys.length - 1);
      }

      if (type === 'deleted') {
        keys.push(key);
        const path = keys.join('.');
        carry.push(`Property '${path}' was removed`);
        keys.splice(keys.length - 1);
      }

      if (type === 'added') {
        keys.push(key);
        const path = keys.join('.');
        carry.push(`Property '${path}' was added with value : ${getObjectDescript(value)}`);
        keys.splice(keys.length - 1);
      }
      return '';
    });

    return result;
  };

  iter(tree, output);

  return output.join('\n');
};
