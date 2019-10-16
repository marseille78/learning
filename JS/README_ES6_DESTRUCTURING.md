# Деструктуризация

## Object destructuring

```javascript
const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
};

const { firstName, lastName } = person;
console.log(firstName, lastName); // "Peter" "Smith"
```

**С вложенностью**

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first, last } } = person;
console.log(first, last); // "Peter" "Smith"
```

**С переименованием свойств**

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first: firstName, last: lastName } } = person;
console.log(firstName, lastName); // "Peter" "Smith"
```

**Свойства по-умолчанию**

*Не работает с вложенными свойствами*

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const {role = 'user'} = person;
console.log(role); // "user"
```

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27,
  role: 'admin'
};

const {role = 'user'} = person;
console.log(role); // "admin"
```

**Частичная деструктуризация**

```javascript
const dect = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const { duck, ...otherAnimals } = dect;

console.log(duck); // quack
console.log(otherAnimals); // {dog: "wuff", mouse: "squeak"}
```

## Деструктуризация аргументов функции

```javascript
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest'
}) {
  console.log('User:', user, 'Port:', port, 'Host:', host);
}

connect({}); // User: guest Port: 12345 Host: localhost
```

```javascript
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest'
}) {
  console.log('User:', user, 'Port:', port, 'Host:', host);
}

connect({ port: 1111 }); // User: guest Port: 1111 Host: localhost
```

**С присвоением значения объекта опций по-умолчанию**

```javascript
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest'
} = {}) {
  console.log('User:', user, 'Port:', port, 'Host:', host);
}

connect(); // User: guest Port: 12345 Host: localhost
```

## Деструктуризация массивов

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c] = fib;
console.log(a, b, c); // 1 1 2
```

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];

const [,, a,,, b] = fib;
console.log(a, b); // 2 8
```

```javascript
const line = [[10, 17], [14, 7]];

const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y); // 10 17 14 7
```

```javascript
const people = ['chris', 'sandra'];

const [a, b, c = 'guest'] = people;
console.log(a, b, c); // chris sandra guest
```

```javascript
const people = ['chris', 'sandra', 'bob'];

const [a, ...others] = people;
console.log(a, others); // chris ["sandra", "bob"]
```

## Примеры

```javascript
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak'
};

// const res = Object.entries(dict);
// console.log(res);
// [ 0: (2) ["duck", "quack"]
//   1: (2) ["dog", "wuff"]
//   2: (2) ["mouse", "squeak"]
//   3: (2) ["hamster", "squeak"] ]

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeak')
  .map(([key]) => key);

console.log(res); // ["mouse", "hamster"]
```

```javascript
const shape = {
  type: 'segmenent',
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};

const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
console.log(startX, startY, endX, endY); // 10 15 17 15
```