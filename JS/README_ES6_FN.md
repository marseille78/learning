# Functions

## Параметры по-умолчанию (Default parameters)

```javascript
function fetchOrders(count, start = 0) {
  console.log(count, start);
}

fetchOrders(15, 50); // 15, 50
fetchOrders(15); // 15, 0
```

*Только `undefined` заменяется на значение по умолчанию.*

## Rest - параметр

*`Rest` - собирает несколько аргументов функции в массив*

```javascript
function max(...numbers) {
  console.log(numbers);
}

max(1, 3, 4); // [1, 3, 4]
max(); // []
```

```javascript
function max(a, b, ...numbers) {
  console.log(numbers);
}

max(1, 2, 3); // [3]
```