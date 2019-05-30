[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# Process

*Глобальна змінна, що містить в собі об'єкт, для роботи з процесом*

## Властивості и методи

* `process.execPath` - Властивість. Шлях до самої Node на комп'ютері користувача

```javascript
console.log('execPath: ', process.execPath); // execPath:  C:\Program Files\nodejs\node.exe
```

* `process.version` - Властивість. Версія Node

```javascript
console.log('version: ', process.version); // version:  v10.9.0
```

* `process.platform` - Властивість. Назва платформи

```javascript
console.log('platform: ', process.platform); // platform:  win32
```

* `process.arch` - Властивість. Тип архітектури

```javascript
console.log('arch: ', process.arch); // arch:  x64
```

* `process.title` - Властивість. Им'я проекту

```javascript
console.log('title: ', process.title); // title:  MINGW64:/d/Projects/test_nodejs_loftschool/1/04-console-process
```

* `process.pid` - Властивість. Номер процесу

```javascript
console.log('pid: ', process.pid); // pid:  11464
```

* `process.cwd()` - Метод. Абсолютный шлях до діректорії, в якій ми знаходимось

```javascript
console.log('cwd(): ', process.cwd()); // cwd():  D:\Projects\test_nodejs_loftschool\1\04-console-process
```

* `process.chdir()` - Метод. Дозволяє змінити діректорію, в якій ми знаходимось.
* `process.nextTick(FN)` - Метод. Запланує виконання заданої функції `FN` таким чином, що ця функція буде виконана після завершення поточної фази, але перед початком наступної

```javascript
process.nextTick(function() {
  console.log('NextTick callback');
})
```

* `process.argv` - Властивість. Масив аргументів запуску додатку `[0: Путь к Node, 1: Путь к файлу, Другие аргументы...]`

```javascript
console.log('argv: ', process.argv); // argv:  [ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\Projects\\test_nodejs_loftschool\\1\\04-console-process\\main.js']
```

* `process.env` - Властивість. Містить в собі об'єкт отоіення.

```javascript
// Unix
export NAME = VALUE;
// Windows
set NAME = VALUE;
```

```javascript
const debug = process.env.DEBUG === '1' ? console.log : function() {};
debug('Виводиться якщо змінна оточення DEBUG === 1');
```

## События

* `exit` - Подія завершення процесу

*Обробка події `exit`*

```javascript
// code = 0 - нормально вийшов
// code = будьяке інше число - вийшов з помилкою
process.on('exit', (code) => {
  console.log('Exit: ' + code); // Exit: 0
})
```

* `unhandledRejection` - Для обробки помилок, які ми не спіймали