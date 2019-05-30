[Главная](../README.md#readme) > [Node.JS](../README_NODEJS.md#readme)

***

# [through2](https://github.com/rvagg/through2#readme)

*Обгортка над Node JS для обробки потоків*

`through2(fn(DATA, ENC, CB))`

Приймає функцію в якості першого параметру, що приймає: `DATA` - дані, `ENC` - інформацію про коодування сторінки, `CB` - функція зворотнього виклику

```javascript
const through2 = require('through2');
const toUpperCase = through2((data, enc, cb) => {       /* 1 */
  cb(null, Buffer.from(data.toString().toUpperCase())); /* 2 */
});
process.stdin.pipe(toUpperCase).pipe(process.stdout);   /* 3 */
```

1. Пакет `through2` приймає функцію в якості першого параметру. я функція приймає дані (в буфері), інформацію про кодування і фунцію зворотнього виклику, яку ми можемо викликати, як тільки завершимо наше перетворення
2. Зазвичай в потоках Node.JS ми передаємо `Buffers` із даними з потоку. Виходячи з `process.stdin`, це, скоріш за все, поточний рядок до того, як ми натиснули Enter. Виходячи з файлу, фактично це може бути що завгодно. Ми перетворюємо поточний буфер в рядок, створюємо прописну версію і знову конвертуємо її в буфер. Функція зворотнього виклику має два аргументи. Перший - можлива помилка. Потік буде аварійно зщавершено й програма припинить роботу, якщо для відлову помилки нема прослуховувача події `end`. Передаємо `null`, якщо нас це влаштовує. Другий аргумент - перетворені дані.
3. Ми можемо використовувати цей **трансформатор** і проникнути в його вхідні дані **потока для читання**. Перетворені дані пересилаються в наш **потік для запису**.

```javascript
const through2 = require('through2');

const toUpperCase = through2((data, enc, cb) => {
  cb(null, Buffer.from(data.toString().toUpperCase()));
});

const dashBetweenWords = through2((data, enc, cb) => {
  cb(null, Buffer.from(data
    .toString()
    .split(' ')
    .join('-')));
});

process
  .stdin
  .pipe(toUpperCase)
  .pipe(dashBetweenWords)
  .pipe(process.stdout);
```