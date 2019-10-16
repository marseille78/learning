const fs = require('fs');
const zlib = require('zlib');
const file = './test.txt';

fs
  .createReadStream(file) // Создается поток чтения файла
  .pipe(zlib.createGzip()) // Сразау архивирует все полученные данные и пробрасывает дальше
  .on('end', () => { // Обработка события окончания чтения
    console.log('Read end');
  })
  .pipe(fs.createWriteStream(file + '.zip')) // Создание потока на запись
  .on('close', () => { // Обработка события окончания записи
    console.log('Closed');
  });