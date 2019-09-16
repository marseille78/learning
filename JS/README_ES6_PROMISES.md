# Promises

*Некая абстракция, которая возвращает объект `Promise`, чтобы представить конечный реультат асинхронной операции*

```javascript
new Promise((resolve, reject) => {
  // resolve('OK'); // Вызываем, когда все хорошо
  reject('ERR'); // Вызываем, когда ошибка
})
  .then((result) => { // Синхронный возврат другого объекта Promise, выпоненный со значениием
    console.log(result);
  })
  .catch((err) => { // Сработает при возникновении ошибки на любом этапе
    console.error(err);
  });

new Promise((resolve, reject) => {
  resolve('ok');
})
  .then((result) => { // Если на этом этапе произойдет ошибка, мы ее не перехватим
    console.log(result);
  }, (err) => { // Не сработает при возникновении ошибки на предыдущем этапе
    console.error('err');
  });
```

## Методы:

* `Promise.resolve(value)` - Статический метод. Возвращает промис со значением `value`, когда все хорошо.
* `Promise.reject(value)` - Статический метод. Возвращает промис со значением `value`, когда все плохо.
* `Promise.all(iterable)` - Статический метод. Возвращает промис, который выполнится тогда, когда будут выполнены все промисы, переданные в качестве итерируемого объекта или отклонен любой из переданных промисов.
* `Promise.race()` - Статический метод. Возвращает первый выполненный промис, неважно `resolve` или `reject`

## `Promise.all()`

*При ошибке, например в одной из ссылок в массиве провалимся в ошибку и остальные данные не будут выданы*
```javascript
const util = require('util');
const _request = require('request');
const request = util.promisify(_request);

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/3',
  'https://loftschool.com/api/v1/courses/streams/21',
];

// Из массива ссылок создаем массив промисов
const p = url.map((item) => {
  return request(item);
});

Promise
  .all(p)
  .then((result) => { // В result возвращается массив ответов по каждому запросу
    result.forEach((item, i) => {
      console.log(`${i} : ${JSON.parse(item.body).special.course_alias}`);
    });
  })
  .catch(console.log);
```

*Пример с ручной обработкой ошибок:*
```javascript
const util = require('util');
const _request = require('request');
const request = util.promisify(_request);

// Создаем массив ссылок длиной в 25 елементов
const url = Array.from({
  length: 25
}, (_, i) => 'https://loftschool.com/api/v1/courses/streams/' + i); // _ - значение (не нужно); i - индекс

// Создаем массив промисов
const p = url.map((item) => {
  return request(item);
});

Promise
  .all(p.map((item) => item.catch(err => err))) // На каждый промис вешаем обработку ошибок, которая передается вникуда, чтобы в случае неправильно ссылки он не вываливался с ошибкой
  .then((result) => { // В result получам все (и с ошибками и без ошибок, как JSON, так и HTML-код, который ломает JSON.parse)
    result.forEach((item, i) => {
      try {
        console.log(`${i}: ${JSON.parse(item.body).special.course_alias}`);
      } catch (error) {} // Запросы, которые возвращают HTML-код вместо JSON выбрасываются
    });
  })
  .catch(console.log);

// Событие указывает нам, что
// на промисе "p" произошла необработанная ошибка по причине "reason"
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
```

## `Promise.race()`

```javascript
const util = require('util');
const _request = require('request');
const request = util.promisify(_request);

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/3',
  'https://loftschool.com/api/v1/courses/streams/21'
];

const p = url.map((item) => {
  return request(item);
});

Promise
  .race(p)
  .then((result) => {
    console.log(JSON.parse(result.body).special.course_alias);
  });

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
```