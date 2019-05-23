[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# console

*Глобальный модуль для работы с консолью*

## Свойства и методы

* `console.assert(BOOLEAN[, MESSAGE])` - Метод. Простое тестирование значения `BOOLEAN`, если оно `false` - выбрасывается ошибка с сообщением `MESSAGE`

```javascript
let a = 5;
let b = 14;

try {
  // Проверяет условие
  // Если условие ложно - пишет необязательное сообщение и возвращает ошибку
  console.assert(a > b, 'Fail: A > B');
} catch (err) {
  console.log(err.message); // Assertion failed: Fail: A > B
}
```