# HTTP

*Модуль для работы с `http`-сервером*

`requestListener(req, res)` - Функция обработки запроса, вызывается при создании сервера, автоматически добавляется к событию `request` и в качестве аргументов принимает `req` - объект запроса к серверу и `res` - объект ответа от сервера

```javascript
const handleRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('The end');
};
```

## Свойства и методы модуля `HTTP`

* [`http.Server`]() - Свойство. Содержит в себе объект сервера
* `http.createServer(fn(req, res))` - Метод. Возвращает экземпляр объекта сервера `http.Server`

## Свойства и методы объекта сервера `http.Server`

* `server.listen(port, hostname, callback)` - Метод. Устанавливает прослушивание сервера `(server)` на порту `(port)` хостинга `(hostname)`. После отработки вызывается `callback`-функция `(callback)`

```javascript
server.listen(3000, 'localhost', () => console.log('Listening on http://localhost:3000'));
```

## Свойства и методы класса `http.ServerResponse`

* `res.writeHead(statusCode, headers)` - Метод. Посылает заголовки ответа на запрос. В качестве аргументов принимает `(statusCode)` - код состояния `HTTP`, и необязательный объект заголовков `(headaers)`

```javascript
var body = 'hello world';
response.writeHead(200, {
  'Content-Length': Buffer.byteLength(body),
  'Content-Type': 'text/plain' });
```

* `res.end(str)` - Метод. Отправляет серверу сигнал с необязательным сообщением `(str)` что были отправлены все заголовки и тело ответа; что сервер должен считать это сообщение завершенным

## Заголовки и их значения

* `Content-Type` - Заголовок. Тип ожидаемого контента *(строка)*
  * `text/plain` - Ответ. Обычный текст
  * `text/html` - Ответ. HTML
* `Content-Length` - Запрос. Длина ожидаемого ответа в байтах *(число)*