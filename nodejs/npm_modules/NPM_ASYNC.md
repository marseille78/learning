[Главная](../README.md#readme) > [Node.JS](../README_NODEJS.md#readme)

***

# [async](https://caolan.github.io/async/v3/)

## Ініціалізація

`npm install async --save`

```javascript
const async = require('async');
```

## Методи і властивості

* `async.waterfall([FUNS(ARGS, CB)], FN(ERR, RESULT))` - Метод. Поступово виконує функції, що лежать в масиві предаючи результат через функцію зворотнього виклику `CB` до наступної. **(Для потупових запитів за чергою)**

```javascript
const fs = require('fs');
const async = require('async');

try {
  async
    .waterfall([
      function(cb) {
        fs.readFile('data.json', 'utf8', (err, data) => {
          cb(err, data);
        });
      },
      function(data, cb) {
        let result = JSON.parse(data);
        result.test = result.test + 10;
        cb(null, result);
      },
      function(arg, cb) {
        fs.writeFile('data.json', JSON.stringify(arg), (err) => {
          cb(err, 'done');
        });
      }
    ], function(err, result) {
      console.error(err);
      console.log('result: ' + result);
    });
} catch (err) {
  console.error(err);
}
```

* `async.parallel([FUNS(CB)], FUN(ERR, RESULT))` - Метод. Параллельно виконуються функції, що заходяться в масиві. Результат з них через колбекі попадає в заключну функцію, яка ці дані обробляє і видає результат

```javascript
const request = require('request');
const async = require('async');

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/2',
  'https://loftschool.com/api/v1/courses/streams/3'
];

async.parallel(url.map((item) => {
  return function(cb) {
    request(item, (err, response, body) => {
      cb(err, `${item}  -  ${JSON.parse(body).special.course_alias}\n`);
    });
  }
}), function(err, results) {
  console.log(results);
});
```