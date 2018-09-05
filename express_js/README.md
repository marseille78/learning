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