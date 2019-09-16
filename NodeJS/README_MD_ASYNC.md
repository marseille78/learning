# Async

*Модуль для асинхронных запросов (был популярен до введения промисов)*

## Waterfall

`waterfall(tasks, callback)`

Запускает `tasks` массив функций последовательно, каждая из которых передает свои результаты следующему в массиве. Однако, если какой-либо из них `tasks` передаст ошибку своему собственному обратному вызову, следующая функция не будет выполнена, и главный `callback` немедленно вызывается с ошибкой.

```javascript
const fs = require('fs');
const async = require('async');

try {
  async
    .waterfall([ // Массив функций

      function(cb) {
        fs.readFile('./data.json', 'utf8', (err, data) => { // Читает файл "data.json",
          cb(err, data); // Вызывает колбек и передает туда возможную ошибку "err" и полученные данные "data"
        });
      },

      function(data, cb) {
        let result = JSON.parse(data); // Парсим полученные данные, превращая их в объект
        result.test = result.test + 10; // Увеличивае текущее значение
        cb(null, result); // Результат передаем дальше
      },

      function(arg, cb) {
        fs.writeFile('data.json', JSON.stringify(arg), (err) => { // Полученный результат преобразуем в строку и записываем в файл
          cb(err, 'done');
        });
      }
    ], function(err, result) { // Последняя функция, в которую мы получаем результат
      console.log(err);
      console.log('Result: ', result);
    });
} catch(err) {
  console.error(err);
}
```

## Parallel

`parallel(tasks, callback)`

Запустите `tasks` сбор функций параллельно, не дожидаясь завершения предыдущей функции. Если какая-либо из функций передает ошибку в свой обратный вызов, главная `callback` немедленно вызывается со значением ошибки. После `tasks` завершения результаты передаются в финал `callback` в виде массива.

*Может использоваться при HTTP-запросах*

```javascript
const request = require('request');
const async = require('async');

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/2',
  'https://loftschool.com/api/v1/courses/streams/3',
];

async.parallel(url.map((item) => {
  return function(cb) { // Создаем массив функций с колбеками
    request(item, (err, response, body) => { // Выполняем запрос
      cb(err, `${item} - ${JSON.parse(body).special.course_alias}`);
    });
  };
}), function(err, results) {
  console.log(results); // Выводим массив результатов
});
```