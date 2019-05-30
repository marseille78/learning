[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# Потокі

## Потік на читання

* `stream.Readable([options])`

**`options`**

* `highWaterMark` - розмір буферу *Default: **16384***
* `encoding <string>` - енкодінг *Default: **null***
* `objectMode <boolean>` - можливість додавати об'єкти *Default: **false***

**Створення екземпляру потока на читання:**

`fs.createReadStream(FILE[, OPTIONS])` - Створення потоку на читання з файлу `FILE` з необов'язковими налаштуваннями `OPTIONS` наприклад для встановлення кодування сторінки

```javascript
const fs = require('fs');

const rs = fs.createReadStream('stream.txt', { encoding: 'utf8' });

rs.on('data', (chunk) => {
  console.log(chunk);
});

rs.on('end', () => {
  console.log('The end');
});
```

**Створення власного екземпляру потоку для зчитування файлу:**

```javascript
const stream = require('stream');
const fs = require('fs');
const path = require('path');

class ReadStream extends stream.Readable {
  constructor(file, options) {
    super(options);
    this.rr = fs.createReadStream(file);// Передаємо файл
  }

  _read(size) {
    this.rr.on('data', (chunk) => {
      this.push(chunk.toString().toUpperCase());
    });
    this.rr.on('end', () => {
      this.push(null);
    });
  }
}

const rs = new ReadStream(path.join(__dirname, 'file.txt'));

rs.on('data', (chunk) => {
  console.log(chunk.toString());
});

rs.on('end', () => {
  console.log('----END----');
});
```

### Події

* `readable` - Подія читання даних *(кращє **data**)*

```javascript
process.stdin.on('readable', () => {
  let chunk;

  while((chunk = process.stdin.read()) !== null) { // Поток вводу завжди має метод `read()` (Ctrl + C - Передає об'єкт null)
    console.log(`Size: (${chunk.length}) - ${chunk.toString()}`);
  }
});
```

* `data` - Подія отримання даних

```javascript
process.stdin.on('data', (chunk) => {
  console.log(`Size: (${chunk.length}) - ${chunk.toString()}`);
});
```

* `end` - Подія закінчення и закриття потоку на читання

```javascript
rs.on('end', () => {
  console.log('The end');
});
```

* `close` - Подія закінчення и закриття потоку на читання
* `finish` - Подія закриття поток на читання *(кращє **close**)*
* `drain` - Подія звільнення буфера після переповнення

### Властивості і Методи

* `rs.read()` - Метод считування даних
* `rs.destroy()`
* `rs.pipe(ws)` - Метод. Перенаправляє дані з потоку на читання `rs` до потоку на запис `ws`

```javascript
const fs = require('fs');

const rs = fs.createReadStream('stream.txt');
const ws = fs.createWriteStream('stream_copy.txt');

rs.pipe(ws);
```

### Звернення до потоку читання в напряму через `process`

`process.stdin`

```javascript
process.stdin.on('readable', () => {
  let chunk;

  while((chunk = process.stdin.read()) !== null) { // Поток вводу завжди має метод `read()` (Ctrl + C - Передає об'єкт null)
    console.log(`Size: (${chunk.length}) - ${chunk.toString()}`);
  }
});
```

```javascript
process.stdin.on('data', (chunk) => {
  console.log(`Size: (${chunk.length}) - ${chunk.toString()}`);
});
```

## Потік на запис

* `stream.Wratable([options])`

**Створення екземпляру потока для запису файла:**

`fs.createWriteStream(FILE[[, OPTIONS], DATA])` - Створення екзампляру потока на запис даних `DATA` в файл `FILE`. Якщо дані не вказані - їх можна додати пізніше через екземпляр потока. Також можна встановити необов'язкові додаткові налаштування `OPTIONS`, наприклад кодування сторінки

```javascript
const fs = require('fs');

const ws = fs.createWriteStream('stream.txt');

ws.write('First\n');
ws.write('Second\n');
ws.end('end');
```

### Події

* `end` - Виникає при завершенні читання з потоку
* `close` - Виникає при закритті потоку на читання
* `data` - Спрацьовує при надходженні нових даних
* `readable` - Спрацьовує коли викликається метод `read()`

### Властивості і методи

* `ws.write(DATA)` - Метод. Записує в потік дані `DATA`
* `ws.end([DATA])` - Метод. Закриває потік із необов'язковим доданням даних `DATA`. *Після цього методу будь яке додавання даних до потоку викличе помилку*

### Звернення до потока запису в напряму через `process`

`process.stdout` - Висновок даних із потоку на читання в консоль

```javascript
const request = require('request');
request('https://fettblog.eu').pipe(process.stdout);
```

## Потік Duplex

*Двунаправлений потік на читання і запис*

## Додаткові модулі

* [through2](https://github.com/rvagg/through2#readme) - Модуль для трансформації потоків