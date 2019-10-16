const util = require('util');
const _request = require('request');
const request = util.promisify(_request);

// Создаем массив ссылок
const url = Array.from({
  length: 25
}, (_, i) => 'https://loftschool.com/api/v1/courses/streams/' + i);

// Создаем массив промисов
const p = url.map((item) => {
  return request(item);
});

Promise
  .all(p.map((item) => item.catch((err) => err))) // пробрасываем ошибки, игнорируя их, чтобы при несуществующем адресе при запросе не падало приложение с ошибкой
  .then((result) => {
    result.forEach((item, i) => {
      try {
        console.log(`${i} : ${JSON.parse(item.body).special.course_alias}`);
      } catch (err) {} // На случай прихода некорремтного JSON (если придет HTML-код)
    })
  });

// Для отловки необработанных ошибок
// reason - причина ошибки
// p - Promise, в котором произошла ошибка
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
});