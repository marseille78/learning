[Главная](../../README.md#readme) > [Node.JS](../README.md#readme)

# Event Loop (Цикл событий)

`process.nextTick(fn)` - Переносит выполнение содержимого callback-функции (fn) в конец текущей итерации цикла синхронных событий

`setImmediate(fn)` [Пример](immediate\number-listener.js) - Переносит выполнение содержимого callback-фукнции в конец следующей итерации цикла событий