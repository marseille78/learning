[Главная](../../README.md#readme) > [Node.JS](../README.md#readme)

# Модуль [Events](https://nodejs.org/api/events.html)

- [Модуль Events](#%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-events)
    - [Свойства и методы](#%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B)
    - [Специальные события](#%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F)
    - [Паттерн `EventEmitter`](#%D0%BF%D0%B0%D1%82%D1%82%D0%B5%D1%80%D0%BD-eventemitter)

***

* `EventEmitter` всегда синхронный и вызывает всех своих слушателей в порядке подписки
* У `EventEmitter` есть специальное событие `error`, если оно произошло и нет ни одного обработчика `error`, то будет выброшено исключение
* У `EventEmitter` есть ограничение на максимальное количество обработчиков для одного события. По умолчанию оно равно **10**

`const EventEmitter = require('events').EventEmitter` - Получение объекта `(const EventEmitter)`, для создания собственных событий

```javascript
const EventEmitter = require('events').EventEmitter;
const server = new EventEmitter();

server.on('request', req => {
    req.approved = true;
});

server.on('request', req => {
    console.log(req);
});

server.emit('request', {from: 'Клиент'});
server.emit('request', {from: 'Еще клиент'});
```

## Свойства и методы

* `EventEmitter.listenerCount(emitter, event)` - Статический метод класса `(EventEmitter)`. Возвращает количество обработчиков на событие `(event)` в экземпляре класса события `(emitter)`
* `newListener` - Событие класса `EventEmitter`. Добавление нового слушателя
* `removeListener` - Событие класса `EventEmitter`. Удаление слушателя
* `emitter.eventNames` - Свойство объекта `(emitter)`. Содержит в себе все события, которые испускались на этом `EventEmittere`
* `emitter.listeners(event)` - Метод объекта `(emitter)`. Возвращает все обработчики на данное событие `(event)`
* `emitter.on(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)`, при возникновении которого вызывается функция-обработчик `(fn)`. Синоним `emitter.addListener` 
* `emitter.addListener(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)`, при возникновении которого вызывается функция-обработчик `(fn)`. Синоним `emitter.on`
* `emitter.prependListener(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)`, при возникновении которого вызывается функция-обработчик `(fn)`. Добавляет обработчик в начало списка всех обработчиков
* `emitter.once(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)` единожды, при возникновении которого вызывается функция-обработчик `(fn)`. После его срабатывания эта подписка удаляется
* `emitter.prependOnceListener(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)` единожды, при возникновении которого вызывается функция-обработчик `(fn)`. Добавляет обработчик в начало списка всех обработчиков. После его срабатывания эта подписка удаляется
* `emitter.removeListener(event, fn)` - Метод объекта `(emitter)`. Снимает подписку с события `(event)` на обработчик `(fn)`
* `emitter.removeAllListeners(event)` - Метод объекта `(emitter)`. Снимает подписку с события `(event)` на все обработчики
* `emitter.emit(event, args)` - Метод объекта `(emitter)`. Возбуждает событие `(event)` и передает обработчику список аргументов `(args)`
* `emitter.setMaxListeners(n)` - Метод объекта `(emitter)`. Установка максимального количества `(n)` обработчиков для текущего объекта. *По умолчанию - 10*

## Специальные события

    * `uncaughtException` - Специальное событие. Обработка ошибки. Если не установлен обработчик, то `EventEmitter` сам вызывает `throw`

## Паттерн `EventEmitter`

```javascript
const EventEmitter = require('events');

class StartupEmitter extends EventEmitter {
    constructor() {
        super();
        setImmediate(() => {
            this.emit('startup', 'hello');
        });
    }
}

const startupEmitter = new StartupEmitter();
startupEmitter.on('startup', (data) => console.log(data));
```