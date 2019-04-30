[Главная](../../README.md) > [JavaScript](../README_JS.md)

***

# ES6

* [Стрелочные функции]
* [Rest-параметр]
* [Spread-оператор]
* [Деструктуризация]
  * [Деструктуризация объектов]
  * [Деструктуризация массивов]
* [Шаблонные строки]
* [Объекты]
  * [Создание объекта при совпадении имени переменной и свойства объекта]
  * [Добавление метода в объект]
  * [Создание динамических свойств]
  * [Перезаписывание объектов]
  * [Оператор Object Spread]
  * [Прототипы]
* [Классы]

## Стрелочные функции

## Rest-параметр

*Особый параметр, который группирует в массив все те аргументы, которые не были присвоены обычным параметром*

## Spread-оператор

*Раскладывает массив на список независимых элементов, которые затем можно передать в функцию или использовать в другом массиве*

## Деструктуризация

### Деструктуризация объектов

```javascript
const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
};

const { firstName, lastName } = person;
console.log(firstName, lastName);// 'Peter' 'Smith'
```

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first, last } } = person;
console.log(first, last);// 'Peter' 'Smith'
```

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first: firstName, last: lastName } } = person;
console.log(firstName, lastName);
```

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { permissions: { role = 'user' } = {} } = person;
console.log(user);
```

```javascript
function connect({
  host = 'localhost',
  port = 123456,
  user = 'guest'
}) {
  console.log('user: ', user, 'port: ', port, 'host: ', host);
}

connect({ port: 1111 });// user:  guest port:  1111 host:  localhost
```

```javascript
function connect({
  host = 'localhost',
  port = 123456,
  user = 'guest'
} = {}) {
  console.log('user: ', user, 'port: ', port, 'host: ', host);
}

connect();// user:  guest port:  123456 host:  localhost
```

```javascript
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const { duck, ...otherAnimals } = dict;
console.log(otherAnimals);// {dog: "wuff", mouse: "squeak"}
```

### Деструктуризация массивов

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];
const [a, b, c] = fib;
console.log(a, b, c);// 1 1 2
```

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];
const [,,a ,, b] = fib;
console.log(a, b);// 2 5
```

```javascript
const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log('p1: ', p1x, p1y, 'p2: ', p2x, p2y);// p1:  10 17 p2:  14 7
```

```javascript
const people = ['chris', 'sandra'];
const [a, b, c = 'guest'] = people;
console.log(a, b, c);// chris sandra guest
```

```javascript
const people = ['chris', 'sandra', 'bob'];
const [a, ...others] = people;
console.log(others);// ["sandra", "bob"]
```

## Шаблонные строки

```javascript
const user = 'guest';
const str = `Hello ${guest}`;
console.log(str);// Hello guest
```

## Объекты

### Создание объекта при совпадении имени переменной и свойства объекта

```javascript
const x = 10;
const y = 30;
const point = { x, y };
console.log(point);// {x: 10, y: 30}
```

### Добавление метода в объект

```javascript
const a = 10;
const b = 30;

const point = {
  a,
  b,
  sum() {
    return a + b;
  }
};
console.log(point.sum());// 40
```

### Создание динамических свойств

```javascript
const prefix = '_blah_';

const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 23
};

console.log(data);// {_blah_name: "Bob", _blah_age: 23}
```

### Перезаписывание объектов

`Object.assign(objects)` - Объединяет свойства списка объектов `objects` в один, причем каждый последующий перезаписываает одноименные свойства предыдущего

```javascript
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

// defaults - Объект, который содержит все необходимые свойства
// opts - Объект, свойствами которого мы будем перезаписываать некоторые поля
// Возвращает первый объект
Object.assign(defaults, opts);
console.log(defaults);// {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```

*Преобразуем выше указанный код, чтобы первый объект не перезаписывался*

```javascript
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

const res = Object.assign({}, defaults, opts);
console.log(res);// {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```

### Оператор Object Spread

*Объединяет свойства объектов в один, причем каждый последующий перезаписываает одноименные свойства предыдущего*

```javascript
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

const res = { ...defaults, ...opts };
console.log(res);// {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```

*Также можно добавлять произвольные элементы*

```javascript
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const opts = {
  user: 'john',
  password: 'utopia'
};

const port = 8080;

const res = {
  ...defaults,
  ...opts,
  port,
  connect() {}
};
console.log(res);// {connect: connect() {}, dbName: "blog", host: "localhost", password: "utopia", port: 8080, user: "john"}
```

### Прототипы

**Плохо сказываается на производительности приложения**
`Object.setPrototypeOf(obj, proto)` - Функция. Устанавливает связь прототипа `proto` и объекта `obj`

```javascript
const animal = {
  say: function() {
    console.log(this.name, 'goes', this.voice);
  }
};

const dog = {
  name: 'dog',
  voice: 'woof'
};

Object.setPrototypeOf(dog, animal);

dog.say();// dog goes woof
```

**Создание объекта на основе `Object.create()`**

`const obj = Object.create(proto)` - Создание пустого объекта `obj` на основе прототипа `proto`

```javascript
const animal = {
  say: function() {
    console.log(this.name, 'goes', this.voice);
  }
};

const dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'woof';

dog.say();// dog goes woof
```

**Создание объекта на основе конструктора**

```javascript
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
  console.log(this.name, 'goes', this.voice);
}

const dog = new Animal('Dog', 'woof');
const cat = new Animal('Cat', 'meow');

dog.say();// Dog goes woof
cat.say();// Cat goes meow
```

## Классы

```javascript
class Animal {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }
  
  say() {
    console.log(this.name, 'said', this.voice);
  }
}

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Bird extends Animal {
  constructor(name, voice, canFly) {    
    // Если класс наследуется от другого супер-класса, то мы его вызываем явно
    // Важно вызвать его перед this
    super(name, voice);
    this.canFly = canFly;
  }
}

const duck = new Bird('Duck', 'quack');
duck.say();// Duck said quack
```

**Propose классы (пока не в стандарте)**

```javascript
// Можно применять, когда наши свойства не зависят от внешних параметров
class Counter {
  count = 0;

  // Методы, в которых this автоматически привязан к объекту
  inc = () => {
    this.count += Counter.incrementStep;
    console.log(this.count);
  }
  
  // Статические свойства - свойства, которые принадлежат классу, а не конкретному экземпляру
  // Обычно используются, чтобы логически группировать функции
  static incrementStep = 2;
  static incrementAll = function(arr) {
    arr.forEach((c) => c.inc());
  }
}

Counter.incrementAll([]);

const counter = new Counter();
counter.inc();// 2
counter.inc();// 4
```