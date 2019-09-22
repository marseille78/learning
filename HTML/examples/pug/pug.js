// Pug template example

const pug = require('pug');
const path = require('path');
const http = require('http');

const data = require('./data');

const index = path.join(__dirname, 'views/pug/index.pug');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});

  // Компиляция шаблона из файла
  const compiledFunction = pug.compileFile(index);
  response.write(compiledFunction({d: data}));

  response.end();
}).listen(3000, () => console.log('Listening...'));