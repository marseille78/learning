# LowDB

## Подключение

```javascript
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./models/data.json');
const db = low(adapter);
```

## Установка данных по умолчанию

```javascript
db
  .defaults({posts: [], user: {}, count: 0})
  .write();
```

## Запись данных

**Добавление объекта данных в массив поля `posts`**

```javascript
db
  .get('posts')
  .push({id: 1, title: 'lowdb is awesome'})
  .write();
```

**Запись значения `'typicode'` в поле `user.name`**

```javascript
db
  .set('user.name', 'typicode')
  .write();
```

## Обновление данных

**Обновление значения поля `count`**

```javascript
db
  .update('count', n => n + 1)
  .write();
```

## Получение данных

**Получение значения элемента массива с идентификатором `id: 1` из поля `posts`**

```javascript
db
  .get('posts')
  .find({ id: 1 })
  .value();
```

[Пример. Загрузка изображения](./examples/upload/)