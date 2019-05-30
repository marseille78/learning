[Главная](../README.md#readme) > [Node.JS](../README_NODEJS.md#readme)

***

# [request](https://github.com/request/request#readme)

*Модуль для створення запитів на серевер*

**request** — це універсальний інструмент HTTP стрімінга.

Зіцінінть:

```javascript
var fs = require('fs')
var request = require('request');

request('http://google.com/doodle.png').pipe(
    fs.createWriteStream('doodle.png')
)
```

*Отвал башки! Вы только что перенаправили ответ для HTTP-запроса к http://google.com/doodle.png в локальный файл doodle.png!*

Вот еще более крутой пример:

```javascript
var fs = require('fs')
var request = require('request');

fs.readStream('file.json').pipe(
    request.put('http://mysite.com/obj.json')
)
```

*Опять отвал башки! Тут происходит перенаправление локального файла file.json в виде HTTP PUT запроса по адресу http://mysite.com/obj.json.*

И еще немного крутизны:

```javascript
var request = require('request');

request.get('http://google.com/img.png').pipe(
    request.put('http://mysite.com/img.png')
)
```

*Снова улет! Этот код перенаправляет HTTP GET запрос к http://google.com/img.png в виде HTTP PUT запроса к http://mysite.com/img.png.*

В Browserling, мы используем этот модуль для стримминга данных в/из couchdb. Вот еще один пример, который сохраняет JSON-документ в тестовую БД couchdb:

```javascript
var request = require('request')
var rand = Math.floor(Math.random()*100000000).toString()

request({
  method: 'PUT',
  uri: 'http://mikeal.iriscouch.com/testjs/' + rand,
  multipart: [
    {
      'content-type': 'application/json',
      'body': JSON.stringify({
        foo: 'bar',
        _attachments: {
          'message.txt': {
            follows: true,
            length: 18,
            'content_type': 'text/plain'
           }
         }
       })
    },
    { body: 'I am an attachment' }
  ]
}, function (error, response, body) {
  if(response.statusCode == 201){
    console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand);
  } else {
    console.log('error: '+ response.statusCode);
    console.log(body);
  }
})
```

Установить модуль можно, как всегда, через npm:

`npm install request`