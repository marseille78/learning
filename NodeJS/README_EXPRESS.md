# Express

## Базовое express-приложение

```javascript
const express = require('express');
const app = express(); // создаем экземпляр приложения

// GET-запрос приложения на сервер на главную страницу
// req - объект запроса
// res - объект ответа
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Запуск приложения на 3000-м порту
app.listen(3000, () => console.log('Listening...'));
```

## Маршрутизация

```javascript
// app - экземпляр express
// METHOD - метод запроса HTTP
// PATH - путь запроса на сервере
// HANDLER - функция, выполняемая при сопоставлении маршрута
app.METHOD(PATH, HANDLER);
```

**Запрос для любого метода:**

```javascript
app.all(PATH, HANDLER);
```

**Пути маршрутов:**

*Строки*

```javascript
app.get('/about', (req, res) => {});
```

*Шаблоны строк*

```javascript
app.get('/ab?cd', (req, res) => {});
```

*Регулярные выражения (не рекомендуется)*

```javascript
app.get(/a/, (req, res) => {});
```

## Методы ответа сервера

* `res.download()` - Приглашение загрузки файла
* `res.end()` - Завершение процесса ответа
* `res.json()` - Отправка ответа JSON
* `res.jsonp()` - Отправка ответа JSON с поддержкой JSONP
* `res.redirect()` - Перенаправление ответа
* `res.render()` - Вывод шаблона представления
* `res.send()` - Отправка ответа различных типов
* `res.sendFile()` - Отправка файла в виде потока октетов
* `res.sendStatus()` - Установка кода состояния ответа и отправка представления в виде строки в качестве тела ответа

## Роутинг

**`birds.js` - файл роутинга**

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Birds home page');
});

router.get('/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;
```

**`app.js` - сервер**

```javascript
const birds = require('./birds');
// ...
app.use('/birds', birds);
// ...
```

## Шаблонизаторы

**Подключение**

```javascript
app.set('views', './views'); // Указываем каталог, в котором находятся шаблоны
app.set('view engine', 'pug'); // Указываем шаблонизатор
```

**Вызов шаблона `index.pug`**

```javascript
app.get('/', (req, res) => {
  res.render('index', {title: 'Hey!', message: 'Hello world!'});
});
```

## Промежуточное ПО / Middleware

*Функции, имеющие доступ к объекту запроса `(req)`, объекту ответа `(res)` и к следующей функции промежуточной обработки в цикле `запрос-ответ` приложения. Следующая функция промежуточной обработки, как правило, обозначается переменной `next`*

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Time:', Data.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000);
```

**Вызов middleware только для определенного роута**

```javascript
app.get(PATH, MW, (req, res) => {});
```

## Запрос параметра строки в маршруте

**Получить значение переменной `name`**

```
http://localhost:3000/test?name=loftschool
GET-запрос
```

Это свойство представляет собой объект, содержащий свойство для каждого запроса параметра строки в маршруте. Если нет строки запроса, это пустой объект `{}`.

```javascript
app.get('/test', (req, res) => {
  console.log(req.query.name);
  res.json(req.query.name);
});
```

## Именованные параметры маршрутизации

**Получить именованный параметр `loftschool`**

Роутинг

```
http://localhost:3000/test/loftschool
```

Это с войство тоже является объектом. Например, если у вас есть маршрут `/user/:name`, то свойство "`name`" доступно как `req.params.name`. Этот объект по умолчанию `{}`.

```javascript
app.get('/test/:name', (req, res) => {
  console.log(req.params.name);
  res.json(req.params.name);
});
```

## POST запрос

**Получение параметра из тела запроса**

```javascript
const app = require('express')();
const bodyParser = require('body-parser');

// Подключение body-parser
// extended: false - для передачи обычных строк
// extended: true - для передачи массивов данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/test', (req, res) => {
  console.log(req.body.name);
  res.json(req.body.name);
});
```