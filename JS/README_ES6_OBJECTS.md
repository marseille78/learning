# Объекты

## Объявление свойств

```javascript
const x = 10;
const y = 30;

const obj = {x, y};

console.log(obj); // {x: 10, y: 30}
```

## Объявление методов

```javascript
const x = 10;
const y = 30;

const obj = {
  x,
  y,

  draw(ctx) {
    // ...
  }
};
```

## Динамическая установка префиксов

```javascript
const prefix = '_blah_';

const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
};

console.log(data); // { _blah_name: 'Bob', _blah_age: 23 }
```

## Копирование свойств объекта

```javascript
Object.assign(RES_OBJ, OBJ1, OBJ2, ...)
// RES_OBJ - Результирующий объект, который получит все свойства и будет возвращен
// OBJ1, OBJ2 - Дополнительные объекты, свойства из которых копируются в результирующий. В случае совпадения ключей - значение последующего объекта перезапишет значение предыдущего
```

**Создать объект, который будет объединять опции из обоих объектов. Опции, переданные пользователем имеют более высокий приоритет и при совпадении ключей перезапишут опции по-умолчанию**

```javascript
// Опции по-умолчанию
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

// Опции, полученные от пользователя
const opts = {
  user: 'john',
  password: 'utopia'
};

const res = Object.assign({}, defaults, opts);

console.log(res);
// {
//   host: 'localhost',
//   dbName: 'blog',
//   user: 'john',
//   password: 'utopia'
// }
```

**Создание shallow-копии объекта (поверхностной копии объекта)**

```javascript
const person = {
  name: 'Bob',
  friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
console.log(shallowCopy); // { name: 'Bob', friends: [ 'Mark', 'Jacob' ] }
```

## Spread-оператор для объектов

```javascript
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const user = {
  user: 'john',
  password: 'utopia'
};

const port = 8080;

const res = {
  ...defaults,
  ...user,
  port,// port: port
  connect() {
    // ...
  }
};
console.log(res);
// {
//   host: 'localhost',
//   dbName: 'blog',
//   user: 'john',
//   password: 'utopia',
//   port: 8080,
//   connect: [Function: connect]
// }
```

## классы

```javascript
class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(this.name, 'goes', this.voice);
  }
}

class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    // Вызов метода из родительского прототипа
    super.say(); // Duck goes quack
    this.canFly = canFly;
  }

  // Переопределение метода
  say() {
    console.log('Birds don\'t like to talk');
  }
}

const duck = new Bird('Duck', 'quack', true);

duck.say(); // Birds don't like to talk
```

```javascript
class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      this.count += Counter.incrementStep;
    };
  }
}

// Статическое свойство
Counter.incrementStep = 2;

// Статический метод
Counter.incrementAll = function(arr) {
  arr.forEach((c) => c.increment());
};
```

## Свойства классов

*Новые возможности `Еще не в стандарте`*

```javascript
class Counter {
  // Добавление свойств без constructor
  count = 0;

  // Методы в виде стрелочных функций
  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  }

  static incrementStep = 2;

  static incrementAll = function(arr) {
    arr.forEach((c) => c.inc());
  };
}

Counter.incrementAll([]);

const cnt = new Counter();
cnt.inc();
```