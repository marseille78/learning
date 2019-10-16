const fs = require('fs');

const readStream = (stream) => {
  return function () {
    return new Promise((resolve, reject) => {
      stream.on('data', ondata);
      stream.on('error', onerror);
      stream.on('end', onend);
      stream.resume(); // Возобновление потока чтения

      function ondata(chunk) {
        stream.pause(); // Ставим поток на паузу
        clearListener(); // Очистка всех обработчиков
        resolve(chunk);
      }

      function onerror(err) {
        clearListener(); // Очистка всех обработчиков
        reject(err);
      }

      function onend() {
        clearListener(); // Очистка всех обработчиков
        resolve();
      }

      function clearListener() {
        stream.removeListener('data', ondata);
        stream.removeListener('error', onerror);
        stream.removeListener('end', onend);
      }
    });
  };
};

async function read() {
  let stream = fs.createReadStream('01-example.js', {
    highWaterMark: 80,
    encoding: 'utf8'
  });
  let reader = readStream(stream); // Подключаем функцию потока, которая возвращает промис
  let data = await reader();
  while (data) { // Читаем данные, пока не придут пустые
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    console.log(data);
    data = await reader();
  }
}

read();