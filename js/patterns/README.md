[Главная](../../README.md#readme) > [JS](../README.md#readme)

# Шаблоны проектирования

- [Шаблоны проектирования](#%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
    - [Function Argument Pattern (top)](#function-argument-pattern-top)
        - [Полиморфная функция (top)](#%D0%BF%D0%BE%D0%BB%D0%B8%D0%BC%D0%BE%D1%80%D1%84%D0%BD%D0%B0%D1%8F-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F-top)
    - [Chaining (top)](#chaining-top)
    - [Observable (top)](#observable-top)
    - [Timer patterns (top)](#timer-patterns-top)
        - [Async execution pattern (top)](#async-execution-pattern-top)
        - [Recursive setTimeout pattern (top)](#recursive-settimeout-pattern-top)
    - [PUB/SUB (top)](#pubsub-top)

## Function Argument Pattern ([top](#readme))

```javascript
function myFunc(a, b, c) {
    return a + b + c;
}
console.log(1, 2, 3);
console.log(1, 2, 3, 4);
console.log(1, 2);
```

```javascript
function myFunc() {
    var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}
```

### Полиморфная функция ([top](#readme))

```javascript
function sayHi(...users) {
    users.forEach(function(item) {
        if (Array.isArray(user)) {
            user.forEach((user) => sayHi(user));
        } else {
            console.log('Hello, ' + user);
        }
    });
}
sayHi('Alex');
sayHi('Darren', 'Mat');
sayHi(['Darren', 'Mat']);
sayHi(['Alex', 'Darren', ['John', 'Sidney']]);
```

## Chaining ([top](#readme))

*Позволяет создавать цепочки методов наподобие jQuery*

*Пример:*

```javascript
class Calc {
	constructor(start) {
    this.value = start;
  }
  
  add(x) {
    this.value += x;
    return this;
  }
  
  multiply(x) {
    this.value *= x;
    return this;
  }
  
  getResult() {
    console.log(this.value);
    return this;
  }
  
  equals(callback) {
    callback(this.value);
    return this;
  }
}

const calc = new Calc(0)
  .add(1)
  .add(2)
  .multiply(3)
  .equals(result => console.log('Result: ', result));

console.log('calc: ', calc);
```

## Observable ([top](#readme))

*Наблюдает за изменениями каких либо свойств объекта. Для таких целей можно использовать методы как свойства*

```javascript
function Publisher() {
    this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {
    this.subscribers.forEach(function(fn) {
        fn(data);
    });
    return this;
};

Function.prototype.subscribe = function(publisher) {
    publisher.subscribers.push(this);
    return this;
}

const Microsoft = new Publisher();
const Google = new Publisher();
const Apple = new Publisher();

const Ann = function(from){
    console.log(`Delivery from ${from} to Ann`);
};

const Dan = function(from){
    console.log(`Delivery from ${from} to Dan`);
};

const Maria = function(from){
    console.log(`Delivery from ${from} to Maria`);
};

Ann.subscribe(Microsoft).subscribe(Google).subscribe(Apple);
Dan.subscribe(Google).subscribe(Apple);
Maria.subscribe(Microsoft);

Microsoft.deliver('MSNews 1').deliver('MSNews 2');
Google.deliver('GoogleNews 1').deliver('GoogleNews 2');
```

## Timer patterns ([top](#readme))

### Async execution pattern ([top](#readme))

*Для асинхронной обработки данных вместо останавливающего процесс цикла*

```javascript
/**
 * Асинхронное заполнение данными
 * @param items - массив полуаемых данных
 * @param interFn - функция, которая будет генерировать 1 элемент
 * @param callback - функция, которая вызывается, когда отработают все элементы
 */
function buffer(items, interFn, callback) {
    let i = 0,
        len = items.length;

    setTimeout(function() {
        let result;

        for (let start = +new Date(); i < len && (+new Date()) - start < 20; i++) {
            result = interFn.call(items[i], items[i]);
        }

        if (i < len) {
            setTimeout(arguments.callee, 20);
        } else {
            callback();
        }
    }, 50);
}

let html = '';

buffer(result, function(item) {
    html += `<li>${item}</li>`;
}, function(){
    document.getElementById('list').innerHTML = html;
});
```

### Recursive setTimeout pattern ([top](#readme))

## PUB/SUB ([top](#readme))

*Контроллер/сервис. Мы можем какие-то компоненты подписать на разные события*

```javascript
class PubSub {
    constructor() {
        this.cache = {
            // 'cart:add': [fn1, fn2],
            // 'cart:delete': [fn3, fn4]
        };// Сюда сохраняем все те события и все callback-функции, которые будут подписываться на эти события
    }

    /**
     * Вызывает для события с данным id функции, запуская их в цикле
     * @param id - идентификатор события
     * @param args - массив аргументов функций-обработчиков данного события
     */
    pub(id, ...args) {
        console.log(`Pub: ${id}`);

        if (!this.cache[id]) {
            this.cache[id] = [];
        }

        for (let i = 0; i < this.cache[id].length; i++) {
            this.cache[id][i].apply(null, args);
        }
    }

    /**
     * Для того, чтобы подписать кого-то на события
     * @param id - id канала
     * @param fn - функция, которая будет отрабатывать, когда мы что-то сделаем
     */
    sub(id, fn) {
        console.log(`Sub: ${id}`);

        if (!this.cache[id]) {
            this.cache = [fn];
        } else {
            this.cache[id].push(fn);
        }
    }

    /**
     * Отписка функции обработчика от события
     * @param id - идентификатор события
     * @param fn - функция обработчик
     */
    unsub(id, fn) {
        let index;

        if (!this.cache[id]) {
            return;
        }

        if (!fn) {
            this.cache[id] = [];
        } else {
            index = this.cache[id].indexOf(fn);

            if (index > -1) {
                this.cache[id].splice(index, 1);
            }
        }
    }
}

export const pubsub = new PubSub();
```