import fs from 'fs';
import path from 'path';
 
 const openFile = (file) => fs.readFileSync(path.resolve(file), 'utf-8');

export default (file) => {
  const type = file.split('.').at(-1);
  const content = openFile(file);

  if (type === 'json') {
      return JSON.parse(content);
  }


  throw new Error("Неизвестный формат файла: " + type);

};
