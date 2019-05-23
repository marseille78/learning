[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Spread-оператор

## Для массивов

**Раскладываем массив на список независимых элементов, которые затем можно передаать функцию или использовать в другм массиве**

```javascript
const arr1 = [1, 4, 2, 3];
const arr2 = [4, 7, 1];

const res = Math.max(...arr1, ...arr2);

console.log(res);// 7
```

**Полезно также при создании новых массивов на основе старых**

```javascript
const arr1 = [1, 4, 2, 3];
const arr2 = [4, 7, 1];

const shallowCopy = [...arr1, 25, ...arr2];

console.log(shallowCopy);// [1, 4, 2, 3, 25, 4, 7, 1]
```

## Для объектов

**Позволяет собрать в один объект свойства из списка объектов и других элементов**

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

console.log(res); // {host: "localhost", dbName: "blog", user: "john", password: "utopia"}
```