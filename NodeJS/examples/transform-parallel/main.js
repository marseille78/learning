const fs = require('fs');
const split = require('split'); // вытаскивает строки из текстового файла
const request = require('request'); // делает HTTP-запрос
const thP = require('through2-parallel'); // обертка для потока, которая позволяет делать несколько запросов сразу

const urlFile = process.argv[2] || './urlList.txt';

fs
  .createReadStream(urlFile)
  .pipe(split()) // постоянно выкусывает по строчке и передает ее дальше
  .pipe(thP.obj({
    concurrency: 2 // одновременно отправляется 2 запроса
  }, function(url, enc, done) {
    if (!url) {
      return done;
    }
    request(url, (err, response, body) => {
      this.push(`${url}  -  ${JSON.parse(body).special.course_alias} \n`); // добавляем полученные в body данные в поток
      done();
    });
  }))
  .pipe(fs.createWriteStream('./result.txt'))
  .on('finish', () => {
    console.log('Done!');
  });