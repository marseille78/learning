[Главная](../../README.md#readme) > [Работа с проектом](../README.md#readme)

- [ESLint]

***

# [ESLint](https://eslint.org/)

* `eslintrc.yml` - Файл с настройками `ESLint`

## Настройки ESLint

* `parserOptions` - Раздел общих настроек
    * `ecmaVersion` - Версия `ECMAScript`
        * `2017` - 2017-го года
    * `sourceType` - Тип файлов
        * `module` - Модули
* `env` - Раздел переменных окружения (Какие глобальные объекты нам доступны)
    * `es6` - Использование всех объектов из языка ES6 (Значение логического типа)
    * `node` - Использование всех глобальных объектов доступных в `Node.JS` (Значение логического типа)
    * `commonjs` - Подключение модулей по типу `Common.JS` (Значение логического типа)
    * `browser` - Использование всех глобальных объектов браузера (Значение логического типа)
    * `mocha` - Использование глобальных объектов из фреймворка `mocha` (Значение логического типа)
* `extends` - Расширение текущей конфигурации за счет сторонней (указывается путь к сторонней конфигурации в виде строки)

```
parserOptions:
    ecmaVersion: 2017
    sourceType: 'module'

env:
    es6: true
    node: true
    commonjs: true
    browser: false
    mocha: true

extends: 'htmlacademy/node'
```