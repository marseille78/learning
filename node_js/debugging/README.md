[Главная](../../README.md#readme) > [Node.JS](../README.md#readme)

# Отладка / Дебаггинг

- [Отладка / Дебаггинг](#%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0--%D0%94%D0%B5%D0%B1%D0%B0%D0%B3%D0%B3%D0%B8%D0%BD%D0%B3)
  - [Встроенная отладка скриптов](#%D0%92%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0-%D1%81%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B2)
  - [Отладка под браузером Chrome](#%D0%9E%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0-%D0%BF%D0%BE%D0%B4-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BE%D0%BC-chrome--node-inspector)
  - [Логирование / Модуль `debug`](#%D0%9B%D0%BE%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-debug)
  - [Логирование / Модуль `winston`](#%D0%9B%D0%BE%D0%B3%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5--%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-winston)

***

## Встроенная отладка скриптов

* `debagger` - Директива для остановки воспроизведения кода в месте ее нахождения
* `node debug [file]` - Запуск режима отладки файла `(file)` из консоли.
  * `help` - Команда. Помощь, выводит список даоступных команд
  * `cont | c` - Команда. Заставляет скрипт продолжить выполнение
  * `repl` - Вход в режим `Repl`

## Отладка под браузером Chrome / [node-inspector](https://github.com/node-inspector/node-inspector)

*Модуль, устанавливающийся глобально*

* `node --inspect [file]` - Команда. Запуск отладки файла `(file)`
* `node --inspect-brk [file]` - Команда. Запуск отладки файла `(file)` с остановками

## Логирование / Модуль [`debug`](https://github.com/visionmedia/debug#readme)

* `const debug = require('debug')('marker')` - Импортирование в файл модуля `debug` в одноименную константу с меткой `(marker)` вложенные  названия меток можно указывать через "`:`"
* `DEBUG=[marker] node [file]` - Команда. Запуск файла `(file)`, установив при этом переменную окружения `(DEBUG)` в значение метки `(marker)`

## Логирование / Модуль [`winston`](https://github.com/winstonjs/winston#readme)

