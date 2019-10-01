# Formidable

*Загрузка файлов*

1. Подключение

```javascript
const formidable = require('formidable');
// ...
let form = new formidable.IncomingForm();
```

2. Создание папки, куда будем складывать загруженные файлы

```javascript
let upload = path.join('./public', 'upload');
let fileName;
```

3. Проверка, если папка upload не была создана, ее создадим

```javascript
if (!fs.existsSync(upload)) {
  fs.mkdirSync(upload);
}
```

4. Говорим Formidable где находится папка upload. (Чтобы он не сохранял файлы в папку по умолчанию)

```javascript
form.uploadDir = path.join(process.cwd(), upload);
```

5. Парсинг данных

```javascript
form.parse(req, (err, fields, files) => {
  if (err) {
    return console.error(err);
  }

  // Объект полей загрузки файлов. Свойство соответствует атрибуту "name"
  // files.photo.name - Свойство. Имя загружаемого файла
  // files.photo.size - Свойство. Размер загружаемого файла
  // files.photo.path - Свойство. Путь к временному файлу
  if (files.photo.name === '' || files.photo.size === 0) {
    // Если имя файла пустое или файл не загружен - удаляем временный файл и перезагружаем страницу
    fs.unlink(files.photo.path, (err) => {
      if (err) return console.error(err);
    });
    return res.redirect('/?msg=Не загружена картинка!');
  }

  // fields - Объект полей ввода в форму. Свойство соответствует атрибуту "name", Значение - введенной сроке
  if (!fields.photo_name) {
    // Если описание картинки не введено - Удаляем временный файл и перезагружаем страницу
    fs.unlink(files.photo.path, (err) => {
      if (err) return console.error(err);
    });
    return res.redirect('/?msg=Не указано описание картинки!');
  }

  // Установление имени загружаемого файла (соответствует загружаемому файлу)
  fileName = path.join(upload, files.photo.name);

  // Переименование временного файла в реальное название
  fs.rename(files.photo.path, fileName, (err) => {
    if (err) {
      console.error(err);
      // Если файл с таким именем уже существует, перезаписываем его
      fs.unlink(fileName, (err) => {
        if (err) return console.error(err);
      });
      fs.rename(files.photo.path, fileName, (err) => {
        if (err) return console.error(err);
      });
    }

    // Обрезание из пути папки "public"
    // (Другой вариант через регулярные выражения)
    const dir = fileName.slice(fileName.indexOf('\\'));

    // Добавление зименений в базу данных
    db
      .get('pics')
      .push({
        src: dir,
        desc: fields.photo_name
      })
      .write();
    
    // Перезагрузка страницы
    res.redirect('/?msg=Картинка успешно загружена!');
  });
});
```

[Пример. Загрузка изображения](./examples/upload/)