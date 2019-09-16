# mz

*Оборачивает в `Promise` методы встроенные в Node*

**Работает с:**

* `child_process`
* `crypto`
* `dns`
* `fs`
* `readline`
* `zlib`

## Пример

```javascript
const fs = require('mz/fs');

fs
  .readFile('./data.json', 'utf8') // Читаем файл data.json
  .then((data) => { // data - Прочитанный результат
    let result = JSON.parse(data);
    result.test = result.test + 10;
    return result; // Пробрасываем результат дальше
  })
  .then((data) => {
    return fs.writeFile('./data.json', JSON.stringify(data)); // После записи также возвращается Promise
  })
  .then(() => { // Сюда попадаем уже после того, как отработает предыдущий then и файл data.json будет перезаписан
    console.log('Done');
  })
  .catch((err) => {
    console.error(err);
  });
```