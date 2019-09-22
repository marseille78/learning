// Handlebars Template Example

const hbs = require('hbs');
const fs = require('fs');
const path = require('path');
const http = require('http');

const data = require('./data');

const index = path.join(__dirname, 'views/hbs/index.hbs');

// Подключение партиций
// hbs позволяет подключать все партиции одновременно, подключая директорию
hbs.registerPartials(path.join(__dirname, 'views/hbs/partials/'));

// Регистрация хелпера
// bold - имя хелпера
// context - объект данных
// options.name - имя хелпера
// options.hash - объект, который отображает атрибуты хелпера
// options.fn - функция, которая генерирует HTML
hbs.registerHelper('bold', (context, options) => {
  // console.log('context', context);
  // console.log('options', options);
  return new hbs.SafeString(
    `<div class="bold">${options.fn(context)}</div>`
  );
});

// Если атрибут "class" === "block" - вернуть партицию "block"
// Иначе вернуть партицию "user"
hbs.registerHelper('whichPartial', (options) => {
  console.log('options', options);
  return options.hash.class === 'block' ? 'block' : 'user';
});

// context - передаваемый текст
hbs.registerHelper('link', (context, options) => {
  // Формирование массива атрибутов
  const attrs = [];
  for (const prop in options.hash) {
    attrs.push(`${prop} = "${options.hash[prop]}"`);
  }
  // console.log('context', context);
  // console.log('options', options);
  return new hbs.SafeString(
    `<a ${attrs.join(' ')}>${context}</a>`
  );
});

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'});

  const file = fs.readFileSync(index, 'utf8');
  const compiledFinction = hbs.compile(file); // Компиляция шаблона

  response.write(compiledFinction({d: data})); // Вызов шаблона с переданными в него данными

  response.end();
}).listen(3000, () => console.log('Listening...'));