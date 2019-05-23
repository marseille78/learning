[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# Process

*Глобальная переменная, которая содержит в себе объект, для работы с спроцессом*

## Свойства и методы

* `process.execPath` - Свойство. Путь к интерпретатору Node на компьютере пользователя

```javascript
console.log('execPath: ', process.execPath); // execPath:  C:\Program Files\nodejs\node.exe
```

* `process.version` - Свойство. Версия Node

```javascript
console.log('version: ', process.version); // version:  v10.9.0
```

* `process.platform` - Свойство. Название платформы

```javascript
console.log('platform: ', process.platform); // platform:  win32
```

* `process.arch` - Свойство. Тип архитектуры

```javascript
console.log('arch: ', process.arch); // arch:  x64
```

* `process.title` - Свойство. Имя проекта

```javascript
console.log('title: ', process.title); // title:  MINGW64:/d/Projects/test_nodejs_loftschool/1/04-console-process
```

* `process.pid` - Свойство. Номер процесса

```javascript
console.log('pid: ', process.pid); // pid:  11464
```

* `process.cwd()` - Метод. Абсолютный путь к папке, в которой мы находимся

```javascript
console.log('cwd(): ', process.cwd()); // cwd():  D:\Projects\test_nodejs_loftschool\1\04-console-process
```

* `process.argv` - Свойство. Массив аргументов запуска приложения `[0: Путь к Node, 1: Путь к файлу, Другие аргументы...]`

```javascript
console.log('argv: ', process.argv); // argv:  [ 'C:\\Program Files\\nodejs\\node.exe', 'D:\\Projects\\test_nodejs_loftschool\\1\\04-console-process\\main.js']
```

## События

* `exit` - Событие завершения процесса

*Обработка события `exit`*

```javascript
// code = 0 - нормально вышел
// code = любое другое число - вышел с ошибкой
process.on('exit', (code) => {
  console.log('Exit: ' + code); // Exit: 0
})
```

* `unhandledRejection` - Для обработки ошибок, которые мы не поймали