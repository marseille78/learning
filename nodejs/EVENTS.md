[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# События

*За події в Node.JS відповідає відповідний модуль `events`*

## Властивості і методи

* `el.addListener(EV, LISTENER)` - Метод. Призначення елементу обробник `LISTENER` події `EV`
* `el.on(EV, LISTENER)` - Метод. Призначення елементу обробник `LISTENER` події `EV` (більш короткий запис)
* `el.removeListener(EV, LISTENER)` - Метод. Видалення у елемента події `EV` обробник `LISTENER`
* `el.emit(EV[, ARGS])` - Метод. Дозволяє подіям відпрацьовувати

## Події

* `newListener` - Додання нового слухача **(Викликається в першу чергу)**
* `removeListener` - Видалення існуючого слухача

## Створення події користувача

```javascript
const Events = require('events');
const eventEmitter = new Events();

eventEmitter.on('user_connected', () => {
  console.log('Hello world!');
});

eventEmitter.on('user_disconnected', () => {
  console.log('Goodbye!');
});

eventEmitter.emit('user_connected'); // Hello world!
eventEmitter.emit('user_disconnected'); // Goodbye!
```

*Варіант з переданням власних аргументів*

```javascript
const Events = require('events');
const eventEmitter = new Events();

eventEmitter.on('user_connected', (string) => {
  console.log(string);
});

eventEmitter.on('user_disconnected', (string) => {
  console.log(string);
});

eventEmitter.emit('user_connected', 'Hello world!'); // Hello world!
eventEmitter.emit('user_disconnected', 'Goodbye!'); // Goodbye!
```