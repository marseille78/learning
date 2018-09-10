# Модули

* `module.exports = fn` - Экспортируется все содержимое функции/модуля `(fn)`

```javascript
module.exports = function (announcement) {
    console.log('Announcing: ' + announcement);
};
```

* `exports.mtd = fn;` - Экспорт из модуля только метода `(mtd)` с телом в виде функции `(fn)`

```javascript
var whisper = function (message) {
    console.log('proclaiming: ' + message);
};

exports.softly = whisper;

exports.loudly = function (message) {
    console.log('PROCLAIMING: ' + message);
};
```

* `const mod = require(path);` - Импорт модуля с путем `(path)` в константу `(mod)`
  1. Изначально ищется указанный файл с расширением `*.js` 
  2. Потом ищется папка с указанным именем, внутри которой лежит файл `index.js`
  3. Далее ищется файл с таким именем в формате `*.json`
  4. Если используется только имя, без пути, например `fs`. Это указывает, что импортируется либо базовый/встроенный модуль `Node.JS`, либо специально установленный при помощи `NPM`

```javascript
var announce = require('./announce');
```

## Базовые модули

* `http` - Модуль для работы с `http`-сервером
* `fs` - Модуль для работы с файловой системой
* `os` - Модуль для работы с операционной системой
* `util` - Модуль для поддержки собственных API-интерфейсов `Node.JS`
* `url` - Модуль для работы с адресной строкой