const fromArray = require('from2-array');
const through = require('through2');
const fs = require('fs');
const path = require('path');

// Определение путей
const _path = {
  src: './src/js',
  dist: './dist/js'
};

// Объединяемые файлы. Собираем в массив полные пути к файлам
const files = ['first.js', 'second.js', 'third.js'].map((item) => {
  return path.join(_path.src, item);
});

function concatFiles(dist, files, cb) {
  const destStream = fs.createWriteStream(dist);
  fromArray
    .obj(files) // Преобразует массив в объект
    .pipe(through.obj((file, enc, done) => { // file - обрабатываемый файл, enc - кодировка, done - колбек
      const src = fs.createReadStream(file); // создание потока на запись
      src.pipe(destStream, {end: false}); // {end: false} - Когда произойдет событие "end" не закрывать поток
      src.on('error', (err) => {
        console.error(err);
        done();
      });
      src.on('end', done);
    }))
    .on('finish', () => {
      destStream.end(); // закрываем поток записи
      cb(); // вызывается финальный колбек, что все хорошо
    });
}

concatFiles(path.join(_path.dist, 'main.js'), files, () => {
  console.log('Concat is done!');
});