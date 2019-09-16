# EventEmitter

## Пример 1

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Вставляем новый обработчик вначале (что-то вроде "prepend")
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
});

myEmitter.on('event', () => {
  console.log('A');
});

// Вызываем событие "event"
myEmitter.emit('event');

// B
// A
```

## Пример 2

```javascript
const EventEmitter = require('events');
const fs = require('fs');

class MyEmitter extends EventEmitter {}

const me = new MyEmitter();

me.on('read', (err, data) => {
  me.emit('write', data);
});

me.on('write', (data) => {
  fs.writeFile('text.txt', data, (err) => {
    console.log('Write');
  });
});

fs.readFile('./data.txt', 'utf8', (err, data) => {
  me.emit('read', err, data);
});
```