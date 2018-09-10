# Модуль [Events](https://nodejs.org/api/events.html)

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
* `emitter.listeners(event)` - Метод объекта `(emitter)`. Возвращает все обработчики на данное событие `(event)`
* `emitter.on(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)`, при возникновении которого вызывается функция-обработчик `(fn)`. Синоним `emitter.addEventListener` 
* `emitter.addEventListener(event, fn)` - Метод объекта `(emitter)`. Подписывает объект `(emitter)` на событие `(event)`, при возникновении которого вызывается функция-обработчик `(fn)`. Синоним `emitter.on`
* `emitter.removeEventListener(event, fn)` - Метод объекта `(emitter)`. Снимает подписку с события `(event)` на обработчик `(fn)`
* `emitter.emit(event, args)` - Метод объекта `(emitter)`. Возбуждает событие `(event)` и передает обработчику список аргументов `(args)`
* `emitter.setMaxListeners(n)` - Метод объекта `(emitter)`. Установка максимального количества `(n)` обработчиков для текущего объекта. *По умолчанию - 10*

## Специальные события

* `error` - Специальное событие. Обработка ошибки. Если не установлен обработчик, то `EventEmitter` сам вызывает `throw`