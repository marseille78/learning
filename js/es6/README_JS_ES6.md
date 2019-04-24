[Главная](../../) > [JavaScript](../)

***

# ES6

* [Стрелочные функции]
* [Rest-параметр]
* [Spread-оператор]
* [Деструктуризация]

## Стрелочные функции

## Rest-параметр

*Особый параметр, который группирует в массив все те аргументы, которые не были присвоены обычным параметром*

## Spread-оператор

*Раскладывает массив на список независимых элементов, которые затем можно передать в функцию или использовать в другом массиве*

## Деструктуризация

**Объектов:**

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

**Массивы:**

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