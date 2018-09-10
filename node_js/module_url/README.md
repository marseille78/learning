# [URL](https://nodejs.org/api/url.html) (Модуль для работы с адресной строкой)

## Свойства и методы модуля `URL`

* `url.parse(url, true)` - Метод модуля `url`. Парсит адресную строку и возвращает объект с частями этой строки, с необязательным разбитием `query-string` на ключи объекта
  * `pathname` - Свойство распаршеной адресной строки. Содержит в себе путь запроса до `query-string` т.е. до знака "`?`"
  * `query` - Свойство распаршеной адресной строки. Содержит в себе `query string` запроса, т.е. после знака "`?`"