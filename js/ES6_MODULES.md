[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Модули

*Файл с модулем*

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

class Graph {
  addNode() {
    console.log('node added');
  }
}

const PI = 3.14;
```

*Экспорт функций из файла с модулем*

```javascript
// ...

export {
  add, subtract, multiply, divide
}
```

*Экспорт функций из файала с модулем с переименованием*

```javascript
// ...

export {
  add as a, subtract as s, multiply as m, divide as d
}
```

*Экспорт класса из файла с модулем по умолчанию*

```javascript
// ...

export default Graph;
```

*Импорт списка функций из файла с модулем*

```javascript
import { add, subtract } from './module.js';

console.log(add(2, 2));// 4
```

*Импорт списка функций из файла с модулем с переименованием*

```javascript
import { add as a, subtract as s } from './module.js';

console.log(a(1, 2));// 3
```

*Импорт всего из файла с модулем и присвоение одному объекту*

```javascript
import * as calc from './module.js';

console.log(calc.add(2, 3));// 5
```

*Импортирование из файла с модулем класса по умолчанию*

```javascript
import Graph from './module.js';
```