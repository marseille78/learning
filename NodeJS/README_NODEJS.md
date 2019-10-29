# Node.JS

## Полезные ресурсы

* [Node.JS по полочкам](http://imnotgenius.com/)
* [imnotgenius.com](http://imnotgenius.com/vvedeniya-v-node-js/) - Уроки
* [Руководства по Node.js](https://nodeguide.ru/doc/)
* [Руководство по Node.js `metanit.commetanit.com`](https://metanit.com/web/nodejs/)
* [Создание первого приложения на Node](https://webref.ru/dev/first-node-app)
* `npms.io` - для проверки качества пакетов
* [xsltdev.ru/nodejs/tutorial/debugging/](https://xsltdev.ru/nodejs/tutorial/debugging/) - Отладка
* [npms.io](https://npms.io/) - Проверка пакетов

## модули

**Базовые:**

* `buffer` — используется для операций ввода-вывода (I/O) (прежде всего, в файл и сеть) 
* `stream` — передача потоковых данных
* `url` — утилиты анализа URL

**Глобальные**

* `assert` — используется в проверочных целях для тестирования
* `child_process` — функции для запуска внешних программ (Node и др.)
* `cluster` — позволяет использовать несколько процессов для повышения производительности вашего приложения
* `crypto` — встроенные криптографические библиотеки
* `dns` — функции системы доменных имен (DNS) для преобразования сетевых имен
* `domain` — позволяет группировать ввод-вывод и другие асинхронные операции для изоляции ошибок
* `events` — утилиты для поддержки асинхронных событий
* `fs` — операции файловой системы
* `http` — сервер НТТР и связанные с ним утилиты
* `https` — сервер НТТРS и связанные с ним утилиты
* `net` — асинхронное сетевое API на базе сокетов
* `os` — утилиты операционной системы
* `path` — утилиты имен и путей файловой системы
* `querystring` — утилиты для анализа и создания строк запросов URL
* `readline` — интерактивные утилиты ввода-вывода; в первую очередь, для программ командной строки
* `smalloc` — обеспечивает явное распределение памяти для буферов
* `string_decoder` — преобразование буфера в строки
* `util` — внутренние утилиты Node
* `zlib` — утилита сжатия

## Архивирование файлов

**С использование оперативной памяти компьютера и ограничениями по размеру**

```javascript
const fs = require('fs');
const zlib = require('zlib');
const file = './test.txt';

fs.readFile(file, (err, buffer) => { // Считывание файла и получение его содержимого в буфер
  zlib.gzip(buffer, (err, buffer) => { // Архивация
    fs.writeFile(file + '.gz', buffer, (err) => { // Запись в файл
      console.log('Compressed!');
    });
  });
});
```

**C использованием потоков**

```javascript
const fs = require('fs');
const zlib = require('zlib');
const file = './test.txt';

fs
  .createReadStream(file) // Создание потока чтения файла, который считывается частями
  .pipe(zlib.createGzip()) // Сразу эти части архивируются
  .on('end', () => {
    console.log('Read end');
  })
  .pipe(fs.createWriteStream(file + '.zip')) // Создание потока для записи. Сразу частями его записывавет
  .on('close', () => { // 'close' - не сразу закрывает поток (в отличие от 'finish')
    console.log('Closed');
  });
```

## Потоки

**Считывание данных, введенных в консоль**

```javascript
process.stdin.on('data', (chunk) => {
  if (chunk) {
    console.log(`Got: ${chunk.toString()}`);
  }
});
```

* [Конкатенация файлов при помощи трансформации поптоков]('./examples/transform/)
* [Параллельные запросы при помощи трансформации потоков]('./examples/transform-parallel/)

## Полезные модули

* `fs-extra` - для копирования, удаления и перемещения файлов

## Express + React.js

1. `express PATH` - Установка **express** в директорию с путем `PATH`
2. `cd PATH` - Переход в папку с проектом
3. `npm i` - установка зависимостей **express**
4. Для проверки условный файл `/routes/users.js` видоизменим

```javascript
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "Ruslan"},
    {id: 2, username: "Helen"}
  ]);
});

module.exports = router;
```

5. `PORT=3001 npm start` - Запуск экспресс на любом порту, кроме **3000** (для **win** `set PORT=3001 && node bin/www`)
6. `create-react-app client` - Установка приложения **React** в корневую директорию `client`
7. Установка связи **React.JS** с **Node.JS** в файле `/client/package.json` при помощи ключа `proxy`:

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-scripts": "3.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:3001", // Вставка связи
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

8. Видоизменим файл `/client/src/App.js`

```javascript
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {
            this.state.users.map((user) => (
              <li key={ user.id }>{ user.username }</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
```

9. Запустим **React** на `3000`-м порту, предварительно запустив **Express** на `3001`-м