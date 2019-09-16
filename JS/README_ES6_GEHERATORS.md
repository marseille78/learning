# Генераторы

*Созданы для перебора итериуемых объектов*

**Пример:**
```javascript
// yeild - предварительный return (javascript знает, что я еще вернусь)
function * testGenerator() {
  yield 'Yura';
  yield 'Egor';
  return 'Vova';
}

const myGenerator = testGenerator();

console.log(myGenerator.next()); // { value: 'Yura', done: false }
console.log(myGenerator.next()); // { value: 'Egor', done: false }
console.log(myGenerator.next()); // { value: 'Vova', done: true }
console.log(myGenerator.next()); // { value: undefined, done: true }
```

**Пример 2:**

```javascript
function * testGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const myGenerator = testGenerator(['Yura', 'Vova', 'Lexa']);

let item = myGenerator.next();

while (!item.done) {
  console.log(item.value);
  item = myGenerator.next();
}

// Yura
// Vova
// Lexa
```

**Передача параметров (Проброс параметров между yield):**

```javascript
function * testGenerator(i) {
  const test = yield 'Yura: ' + i;
  const test2 = yield 'Egor ' + test;
  return 'Vova ' + test2;
}

const myGenerator = testGenerator('Init');

console.log(myGenerator.next()); // { value: 'Yura: Init', done: false }
console.log(myGenerator.next('Молодец!')); // { value: 'Egor Молодец!', done: false }
console.log(myGenerator.next('Тоже молодец!')); // { value: 'Vova Тоже молодец!', done: true }
```

**Работа с асинхронностью:**

```javascript
const fs = require('fs');

function asyncFlow(generatorFunc) {
  function cb(err) {
    if (err) {
      return generatorFunc.throw(err);
    }
    
    const results = []
      .slice
      .call(arguments, 1);
    
    let temp = generator.next(results.length > 1
      ? results
      : results[0]);

    console.log(temp);
  }

  const generator = generatorFunc(cb);

  let temp = generator.next();
  console.log(temp);
}

asyncFlow(function * (cb) {
  const filePath = './src/test.txt';
  const file = yield fs.readFile(filePath, 'utf8', cb);
  yield fs.writeFile('./dist/new.txt', file, cb);
});
```

**Избавляемся от колбеков при помощи преобразователей:**

```javascript
const fs = require('fs');

function readFileThunk (filename, options) {
  return function(cb) {
    fs.readFile(filename, options, cb);
  };
}

function writeFileThunk (filename, buffer) {
  return function(cb) {
    fs.writeFile(filename, buffer, cb);
  };
}

function asyncFlow(generatorFunc) {
  function cb(err) {
    if (err) {
      return generator.throw(err);
    }
    
    const results = []
      .slice
      .call(arguments, 1);

    let thunk = generator.next(results.length > 1
      ? results
      : results[0])
      .value;

    thunk && thunk(cb);
  }

  const generator = generatorFunc(cb);

  let thunk = generator
    .next()
    .value;

    // (typeof thunk === 'function') ? thunk(cb) : void 0;
    // void 0 - возвращает "undefined"
    thunk && thunk(cb);
}

asyncFlow(function * (cb) {
  const filePath = './src/test.txt';
  const file = yield readFileThunk(filePath, 'utf8');
  yield writeFileThunk('./dist/new.txt', file);
});
```