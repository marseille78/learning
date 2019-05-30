[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# http

*Модуль для роботи із сервером `http`*

Створення об'єкта серверу:

`const server = http.createServer(fn(req, res))` - Метод, що створює екземпляр об'єкту `Server` за допомогою callback-функції `RequestListener` який отримує два аргументи: `req` - об'єкт `IncomingMessage` *(об'єкт запиту)* і `res` - об'єкт `ServerRequest` *(об'єкт відповіді)*

```javascript
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Метод: ${req.method}`);
  console.log(`URL: ${req.url}`);
  res.end('Hello world!');
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
```
## Властивості і методи

* `http.get(ADDRESS[, CB(RES)])` - Метод. Створює get-запит на адресу `ADDRESS` і викликає функцію зворотнього виклику `CB` із аргументом у вигляді результату `RES`

```javascript
http.get('http://boiko.in.ua', (res) => {
  console.log(`Статус відповіді: ${res.statusCode}`);
}).on('error', (e) => {
  console.log(`Статус помилки: ${e.message}`);
});
```

* `http.request(OPTIONS[, CB])` - Метод. Дозволяє прозоро відавати запити і повертає `http.ClientRequest`
  * `OPTIONS`
    * `protocol`
    * `host`
    * `hostname`
    * `family`
    * `port`
    * `localAddress`
    * `socketPath`
    * `method`
    * `path`
    * `headers`
    * `auth`
    * `agent`
    * `createConnetion`
    * `timeout`

```javascript
const http = require('http');

/* POST */
const options = {
  hostname: 'boiko.in.ua',
  port: 80,
  path: '/',
  method: 'POST'
};
const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });
});

req.on('error', (e) => {
  console.log(`Виникла проблема з відповіддю від сервера: ${e.message}`);
});

req.write(`data\n`);
req.end();
```

## Oб'єкт `Server`

### Методи і властивості

*server.listen(PORT[, CALLBACK])* - Метод. Запускає прослуховування сервера на порту `PORT` із необов'язковою callback-функцією `CALLBACK`

```javascript
server.listen(3000, () => {
  console.log(`Server is running on port: ${port}`);
});
```

## Об'єкт `IncomingMessage`

*Містить в собі всю інформацію об HTTP-запиті: який URL був затребуваний, всі відіслані заголовки, всі відправлені в тілі дані*

### Властивості і методи

* `req.method` - Властивість. Метод запиту
* `req.url` - Властивість. URL запиту

## Об'єкт `ServerResponse`

*Містить в собі властивості і методи для керування відповіддю, що відсилається назад клієнту (зазвичай браузеру). Об'єкт `ServerResponse` реалізує інтерфейс потока запису, що визначає, як саме дані надаються кліенту.*

*Оскільки `ServerResponse` - потік запису, він полегшує передання файлу, але нам ніщо не заважає  створити потік на читання файлу і надіслати його в якості відповіді HTTP-сервера*

```javascript
const http = require('http');
const post = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/favicon.ico') {
    const fs = require('fs');
    fs.createReadStream('favicon.ico');
    fs.pipe(res);
  } else {
    res.end('Hello world!');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
```

### Властивості і методи

* `res.writeHead(STATUS[, HEADS])` - Метод. Надає очикуванні заголовки

```javascript
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
  res.end('<h1>Привет, студент, от loftschool!</h1>');
});
```

* `res.headers()` - Метод. Повертає об'єкт заголовків
* `res.setEncoding('utf8')` - Метод. Встановлює кодування відповіді. Наприклад `utf8`
* `res.write(DATA)` - Метод. Запис даних
* `res.end([DATA])` - Метод. Закриває потік на запис із виводом необов'язкових даних