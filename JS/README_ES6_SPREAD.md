# Spread оператор

*`Spread` - раскладывает массив на список независимых элементов, чтобы потом их передать в функцию или использовать в другом массиве*

## Spread оператор в функциях

```javascript
const arr = [1, 6, 5, 9, 4];

const res = Math.max(...arr);
console.log(res); // 9
```

```javascript
const arr1 = [1, 6, 5, 9, 4];
const arr2 = [4, 7, 12, 3];

const res = Math.max(...arr1, ...arr2);
console.log(res); // 12
```

```javascript
const arr1 = [1, 6, 5, 9, 4];
const arr2 = [4, 7, 12, 3];

const res = Math.max(41, ...arr1, 5, ...arr2, 10);
console.log(res); // 41
```

## Spread оператор в массивах

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 7, 1];

const shallowCopy = [...arr1, 41, ...arr2];
console.log(shallowCopy); // [1, 2, 3, 41, 4, 7, 1]
```