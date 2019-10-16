const fs = require('fs');
const zlib = require('zlib');
const file = './test.txt';

// Способ без потока
// Ограничения:
// 1. Ограничения по размерам
// 2. Загружает память
fs.readFile(file, (err, buffer) => { // Зачитываем файл, получая Buffer
  zlib.gzip(buffer, (err, buffer) => { // Архивируем данные из Buffer
    fs.writeFile(file + '.zip', buffer, (err) => { // Записываем заархивированные данные в новый файл
      console.log('Compressed!');
    });
  });
});