[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# zlib (Модуль для сжатия)

## Свойства и методы

* `zlib.gzip(BUFFER, fn(ERR,BUFFER))` - Метод. Сжатие данных бинарного типа `BUFFER`

```javascript
const fs = require('fs');
const zlib = require('zlib');
const file = './test.txt';

fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.zip', buffer, (err) => {
      if (err) return console.error(err);
      console.log('Compressed');
    });
  })
});
```

* `zlib.createGzip()` - Метод. Створює і повертає новий `Gzip`-об'єкт *Зручо використовувати із потоками*

**Переваги:**

* *Можна використовувати будь які розміри*
* *Не забивається пам'ять*

```javascript
const fs = require('fs');
const zlib = require('zlib');
const file = './text.txt';

fs
  .createReadStream(file)// Створення потоку на читання файлу
  .pipe(zlib.createGzip())// Одразу при отриманні даних із потока на читання починає ці дані архівувари
  .on('end', () => {// Подія закінчення потоку на читання
    console.log('Read end');
  })
  .pipe(fs.createWriteStream(file + '.gz'))// Створення потоку на запис
  .on('close', () => {// Подія закінчення потоку на запис (подія finish - закрыває з'єднання одразу, тому кращє 'close')
    console.log('Closed');
  });
```