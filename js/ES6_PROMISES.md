[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Промисы

**Сторонние библиотеки для работы с AJAX-запросами**

* [*Axios*]
* [*Superagent*]
* [*Got*]
* [*Request*]
* [*Reqwest*]

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