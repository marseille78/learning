[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Rest-параметр

*Параметр функции, который группирует в массив все аргументы, которые не были присвоены обычным параметрам*

```javascript
function fun (a, b, ...nums) {
  console.log(nums);
}

fun(1, 2, 3, 4);// [3, 4]
```

```javascript
function fun (...nums) {
  console.log(nums);
}

fun(1, 4, 3, 2);// [1, 4, 3, 2]
```