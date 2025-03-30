import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const openFile = (file) => fs.readFileSync(path.resolve(file), 'utf-8');

export default (file) => {
  const type = file.split('.').at(-1);
  const content = openFile(file);

  if (type === 'json') {
    return JSON.parse(content);
  }
  if (type === 'yml' || type === 'yaml') {
    try {
      return yaml.load(content);
    } catch (e) {
      console.log(e);
    }
  }

  throw new Error(`Неизвестный формат файла: ${type}`);
};
