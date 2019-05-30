[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# События

*За події в Node.JS відповідає відповідний модуль `events`*

## Властивості і методи

* `el.addListener(EV, LISTENER)` - Метод. Призначення елементу обробник `LISTENER` події `EV`
* `el.on(EV, LISTENER)` - Метод. Призначення елементу обробник `LISTENER` події `EV` (більш короткий запис)
* `el.removeListener(EV, LISTENER)` - Метод. Видалення у елемента події `EV` обробник `LISTENER`
* `el.emit(EV[, ARGS])` - Метод. Дозволяє подіям відпрацьовувати