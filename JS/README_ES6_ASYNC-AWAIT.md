# async/await

*Объявление `async function` определяет асинхронную функцию, которая возвращает `Promise`*

```javascript
async function name([param[, param[, ... param]]]) {
  body
}
// name - имя функции
// param - имя аргумента, который будет передан в функцию
// body - выражение, содержащее тело функции
```

*`await` приостанавливает выполнение функции `async` и ожидает ответа от переданного `Promise`*

**Пример:**

```javascript
const request = require('request');

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/2',
  'https://loftschool.com/api/v1/courses/streams/3',
];

// (1) Создаем функцию, которая возвращаем Promise
function getNameCourse(url) {
  return new Promise((resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(err); // Если ошибка при обращении
      }
      resolve(JSON.parse(body).special.course_alias); // Возвращает промис с результатом
    });
  });
}

const main = async() => {
  for (let i = 0; i < url.length; i++) {
    try {
      let result = await getNameCourse(url[i]);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }
};

main();

// android
// web - development
// digital - marketing
```

**Получение епотоком данных при медленном соединении:**

```javascript
const fs = require('fs');

const readStream = (stream) => {
  // Возвращаем функцию, которая возвращает Promise
  return function () {
    return new Promise((resolve, reject) => {
      stream.on('data', ondata);
      stream.on('error', onerror);
      stream.on('end', onend);
      stream.resume(); // Возобновление потока чтения

      function ondata(chunk) {
        stream.pause(); // ставит поток на паузу
        clearListener(); // чистим все обработчики
        resolve(chunk); // Отдаем данные в Promise
      }

      function onerror(err) {
        clearListener();
        reject(err);
      }

      function onend() {
        clearListener();
        resolve();
      }

      // Удаление обработчиков
      function clearListener() {
        stream.removeListener('data', ondata);
        stream.removeListener('error', onerror);
        stream.removeListener('end', onend);
      }
    })
  }
}

async function read() {
  let stream = fs.createReadStream('01-example.js', {
    // Эмуляция медленного соединения
    highWaterMark: 80, // Установка размера буфера
    encoding: 'utf8'
  });
  let reader = readStream(stream);
  let data = await reader();
  while (data) {
    await new Promise((resolve, reject) => setTimeout(resolve, 500));
    console.log(data);
    data = await reader();
  }
}

read();
```