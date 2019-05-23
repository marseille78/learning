[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Деструктуризация

## Деструктуризация объектов

```javascript
const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
};

const { firstName, lastName } = person;

console.log(firstName, lastName); // Peter Smith
```

*Вариант с вложенной структурой*

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first, last } } = person;

console.log( first, last ); // Peter Smith
```

*Вариант с переименованием переменных*

```javascript
const person = {
  name: {
    first: 'Peter',
    last: 'Smith'
  },
  age: 27
};

const { name: { first: firstName, last: lastName } } = person;

console.log( firstName, lastName ); // Peter Smith
```

*Вариант со значением по умолчанию*

```javascript
const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
};

const { firstName, lastName, role = 'user' } = person;

console.log(firstName, lastName, role); // Peter Smith user
```

*Вариант деструктуризации с аргументом Rest*

```javascript
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak'
};

const { duck, ...otherAnimals } = dict;

console.log(otherAnimals); // {dog: "wuff", mouse: "squeak"}
```

## Деструктуризация объектов в функции

```javascript
function connect({
  host = 'localhost',
  port = 12345,
  user = 'guest'
} = {}) {
  console.log('user: ', user, 'port: ', port, 'host: ', host);
}

connect({ port: 1111 });// user:  guest port:  1111 host:  localhost
```

## Деструктуризация массивов

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];
const [a, b, c] = fib;
console.log(a, b, c); // 1 1 2
```

*Получение значений массива не по очереди*

```javascript
const fib = [1, 1, 2, 3, 5, 8, 13];
const [, a, , , b] = fib;
console.log(a, b); // 1 5
```

*Вариант с вложенной структурой*

```javascript
const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y); // 10 17 14 7
```

*Вариант с значениями по умолчанию*

```javascript
const people = ['chris', 'sandra'];
const [a, b, c = 'guest'] = people;
console.log(a, b, c); // chris sandra guest
```

*Вариант с Rest-оператором*

```javascript
const people = ['chris', 'sandra', 'bob'];
const [a, ...others] = people;
console.log(others); // ["sandra", "bob"]
```

*Вариант с деструктуризацией массива в аргументе функции*

```javascript
const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeack',
  hamster: 'squeack'
};

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeack')
  .map(([key]) => key);

console.log(res);// ["mouse", "hamster"]
```