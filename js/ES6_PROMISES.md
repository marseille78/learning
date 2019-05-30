[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Промисы

**Сторонние библиотеки для работы с AJAX-запросами**

* [*async*] - Зручно використовувати, якщо не можна застосувати *Проміси*
* [*Axios*]
* [*Superagent*]
* [*Got*]
* [*Request*]
* [*Reqwest*]

## Promise

*Абстракція, що повертає об'єкт `Promise`, щоб представити кінцевий результат асинхронної операції*

### Стани промісу

* `pending` - Ожидает
* `resolve` - Виконан. Операція завершилась успішно
* `reject` - Відхилено

### Створення

```javascript
new Promise((resolve, reject) => {
  resolve('ok');
  // reject('err');
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
```

* `resolve(VALUE)` - Передає до позитивного результата `then` значення `VALUE`
* `reject(VALUE)` - Передає до негативного результат `catch` значення `VALUE`

### Методи і властивості

**Проміс відпрацював добре**
* `Promise.resolve(value)` - Статичний метод. Повертає якесь значення до `then`
* `Promise.resolve(promise)` - Статичний метод. Повертає `Promise` до `then`
* `Promise.resolve(thenable)` - Статичний метод. Повертає об'єкт, що має метод `then` **(Ні проміс)** до `then`

**Проміс відпрацював з помилкою**
* `Promise.reject(value)` - Статичний метод. Повертає якесь значення `value` до `catch`

* `Promise.all(ARR)` - Статичний метод. Повертає проміс, який виконається тоді, коли будуть виконані всі проміси, що передані у вигляді перелічаємого аргумента `ARR`, або відхилено будь яке з переданих повідомлень

```javascript
const util = require('util');
const _request = require('request');
const request = util.promisify(_request);

const url = [
  'https://loftschool.com/api/v1/courses/streams/1',
  'https://loftschool.com/api/v1/courses/streams/3',
  'https://loftschool.com/api/v1/courses/streams/21'
];

// З масива посилань зробили масив промісів і зробили запити. Результати перейдуть до `then`
const p = url.map((link) => {
  return request(link);
});

Promise
  .all(p)
  .then((result) => {
    result.forEach((item, i) => {
      console.log(`${i}: ${JSON.parse(item.body).special.course_alias}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
// 0: android
// 1: digital-marketing
// 2: nodejs
```

* `ps.then()` - Синхронне повернення іншого об'єкту проміса викононаго зі значенням
* `ps.catch(ERR)` - Метод. Обробка всіх помилок

## Fetch

*Метод `fetch` – это `XMLHttpRequest` нового поколения. Он предоставляет улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, так как построен на промисах.*

```javascript
let promise = fetch(url[, options]);
```

* Возвращает промис, который, когда получен ответ, выполняет коллбэки с объектом Response или с ошибкой, если запрос не удался.
* `url` - запрашиваемый адрес
* `options` - необязательный объект с настройками запроса
  * `method` - метод запроса
  * `headers` - заголовки запроса (объект)
  * `body` - тело запроса
    * `FormData`
    * `Blob`
    * строка и т.п.
  * `mode` - одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос.
  * `credentials` – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом.
  * `cache` – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос.
  * `redirect` – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.

**Объект `response` кроме доступа к заголовкам `headers`, статусу `status` и некоторым другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.**

* `response.arrayBuffer()`
* `response.blob()`
* `response.formData()`
* `response.json()` - дает результат JSON.parse(responseText)
* `response.text()` - возвращает результат в виде строки

```javascript
'use strict';

fetch('/article/fetch/user.json')
  .then(function(response) {
    alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
    alert(response.status); // 200

    return response.json();
  })
  .then(function(user) {
    alert(user.name); // iliakan
  })
  .catch( alert );
```

## Async / Await