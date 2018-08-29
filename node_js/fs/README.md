# fs (Модуль для работы с файловой системой)

* `const fs = require('fs');` - Подключение модуля
* `fs.readFile(file, fn(err, data))` - Метод. Чтение файла (file) при помощи callback-функции (fn) с аргументами (err) - ошибка, (data) - данные из файла


```javascript
const fs = require('fs');
fs.readFile(__filename, (err, data) => {
    if (err) {
        return console.log(err.message);
    }
    return console.log(data.toString('utf8'));
});
```

* `fs.readdir(path, fn(err, files))` - Метод. Чтение директории по пути (path) при помощи callback-функции (fn) с аргументами (err) - объект ошибки и (files) - список файлов, находящихся в данной директории
* `//fs.mkdir` - Метод. Создание директории
* `//fs.writeFile` - Метод. Запись в файл
* `//fs.unlink` - Метод. Удаление файла
* `//fs.rmdir` - Метод. Удаление директории
* `//fs.access(file, fn(err))` - Метод. Проверка доступа к файлу (file). Обрабатываются callback-функцией (fn) с аргументом (err) - объект ошибки
* `fs.stat(path, fn(err, stats))` - Метод. Информация о пути (Существует ли путь, файл или директория по данному пути, сколько занимает данный файл/директория)
* `//fs.chown` - Метод. Измененние владельца (change owner)
* `//fs.chmod` - Метод. Изменение прав доступа (change mod)
* `//fs.symlink` - Метод. Создание символьной ссылки
* `//fs.open(file, r, fn(err, fd))` - Открытие файла (file) в режиме (r) для работы с ним. посредством callback-функции (fn) с аргументами (err) - объект ошибки, (fd) - дескриптор открываемого файла

```javascript
fs.open('myfile', 'r', (err, fd) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('myfile does not exist');
            return;
        }
        throw err;
    }
    readMyData(fd);
});
```

* `//fs.close` - Метод. Явно закрывает работу с файлом (Нужно, когда предыдущий метод работал с дескриптором файла)