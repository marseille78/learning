# [Express.JS](http://expressjs.com/)

## Старт

`const app = express();` - Создание приложения `express` и сохранение его константу `app`

```javascript
const express = require('express')
const app = express()

// Описание GET-запроса
// req - Объект запроса
// res - Объект ответа
app.get('/', (req, res) => res.send('Hello World!'))

// Установка приложения на прослушку
app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

## Express-генератор

*При глобально установленном `Express.JS` можне генерировать проект*

`express --help | express -h` - Консольная команда. Выводит на экран помощь в генерации `Express`-проекта

* `express [proj]` - Генерация `express`-проекта `(proj)` со значениями по умолчанию

## Свойства и методы `Express`-приложения `(app)`

* `app.set(prop, value)` - Метод приложения `(app)`. Установка свойства приложения `(prop)` со значением `(value)`. Название задается в виде строки
* `app.get(prop)` - Метод приложения `(app)`. Получение ранее установленного свойства приложения `(prop)`. Название задается в виде строки
* `app.get('env')` - Метод приложения `(app)`. Получение переменной окружения `NODE_ENV`. Если она не была установлена, то по умолчанию `'development'`. Для боевого запуска ей присваивается значение `'production'`
* `app.use(fn(req, res, next))` - Метод приложения `(app)`. Установка `middleware`-функции с списком аргументов `(req)`, `(res)` и колбэком для перехода к следующей `middleware`-функции, который позволяет объединять их в цепочки
* `app.use(fn(err, req, res, next))` - Метод приложения `(app)`. Установка `middleware`-функции для обработки ошибок с списком аргументов `(err)`, `(req)`, `(res)` и колбэком для перехода к следующей `middleware`-функции, который позволяет объединять их в цепочки

## Свойства и методы объекта `HTTP`-ответа `(res)`

* `res.send(data)` - Метод объекта HTTP-ответа `(res)`. Отправляет данные `(data)` в HTTP-ответ
  * ``res.send(new Buffer('whoop'));`
  * `res.send({ some: 'json' });`
  * `res.send('<p>some html</p>');`
  * `res.status(404).send('Sorry, we cannot find that!');`
  * `res.status(500).send({ error: 'something blew up' });`
* `res.status(statusCode)` - Метод объекта HTTP-ответа `(res)`. Устанавливает статус `(statusCode)` HTTP для ответа
  * `res.status(403).end();`
  * `res.status(400).send('Bad Request');`
  * `res.status(404).sendFile('/absolute/path/to/404.png');`
* `res.type(t)` - Метод объекта HTTP-ответа `(res)`. Устанавливает в HTTP-заголовок `Content-Type` соответствующий MIME-тип `(t)`
  * `res.type('.html'); // => 'text/html'`
  * `res.type('html'); // => 'text/html'`
  * `res.type('json'); // => 'application/json'`
  * `res.type('application/json'); // => 'application/json'`
  * `res.type('png'); // => image/png`