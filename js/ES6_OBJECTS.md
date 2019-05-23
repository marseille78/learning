[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Объекты

## Базовые возможности

*Вариант, когда имя ключа совпадает с именем переменной, которая ставится в значение*

```javascript
const x = 10;
const y = 30;

const point = { x, y };

console.log(point); // {x: 10, y: 30}
```

*Вариант с описанием метода объекта*

```javascript
const x = 10;
const y = 30;

const point = {
  x,
  y,

  draw() {
    // body
  }
};

console.log(point); // {x: 10, y: 30, draw: ƒ}
```

## Статические методы `Object`

**Копирование свойств из списка объектов в один**

*Возвращает первый обновленный. Каждое последующее свойство перезаписывает предыдущее*

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

Object.assign(defaults, opts);
console.log(defaults); // {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```

*Вариант с созданием нового объекта, который включает в себя свойства последующих*

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

const newObj =Object.assign({}, defaults, opts);
console.log(newObj); // {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```

## Классы

**Создание объекта на базе класса**

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

const animal = new Animal('cat', 'meow');

animal.say(); // cat said meow
```

**Наследование классов**

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

class Bird extends Animal {
  constructor(name, voice, canFly) {
    super(name, voice);
    this.canFly = canFly;
  }
}

const duck = new Bird('Duck', 'quack', true);

duck.say();
```