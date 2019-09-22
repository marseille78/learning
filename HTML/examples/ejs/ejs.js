// ejs template example

const ejs = require('ejs'); // Подключение шаблонизатора
const fs = require('fs');
const path = require('path');
const http = require('http');

// Подключение данных
const data = require('./data');

// Подключение основного шаблона
const index = path.join(__dirname, './views/ejs/index.ejs');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  const file = fs.readFileSync(index, 'utf8');

  // Получение сгенерированного шаблона
  const compiledFunction = ejs.compile(file,
    // 2-й аргумент для возможности подключения модулей
    {
      filename: './views/ejs/included.ejs'
    }
  );

  // Вывод шаблона с передачей в него данных
  res.write(compiledFunction({d: data}));

  res.end();
}).listen(3000, () => console.log('Listening...'));