# [Gulp](https://gulpjs.com/)

* [Основа]()
* [Методы]()
* [Примеры]()
* [Плагины]()

## Основа

`npm install gulpjs/gulp#4.0` - Установка локально `Gulp 4`

`gulpfile.js` - Файл, в котором прописываются настройки для `Gulp`

Для работы необходимо подключить сам объект `Gulp`

`var gulp = require('gulp');`

## Методы Gulp

* `gulp.task(name, fn)` - Метод. Задает задачу с именем `name`, которую описывает функция `fn` *(Пример 1)*
  * `gulp.task(name, [tasks], fn)` - Метод. Задает задачу с именем `name`, которую описывает функция `fn`, предварительно выполнив список задач `tasks`. Задачи выполняются параллельно *(Пример 2)*

*Пример 1*

```javascript
gulp.task('html', () => (
    gulp.src('client/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'))
));
```

*Пример 2*

```javascript
gulp.task('copy-images', ['images', 'optimize', 'sprite'], function() {
    return gulp.src('images/**/*.{png,jpg,svg}')
        .pipe(gulp.dest('./bin'));
});
```

* `gulp.task('default', [tasks])` - Метод. Устанавливает задачу по умолчанию, которая состоит из перечня установленных задач (tasks)

```javascript
gulp.task('default', ['html', 'css']);
```

```javascript
gulp.task('default', gulp.parallel('images', 'html'));
```

* `gulp.src(path)` - Метод. Указывает для каких файлов с маской пути (path) будет использована текущая задача. Возвращает `stream` для последующей обработки выбранных файлов
  * Маски путей:
    * `*.png` - Файлы с любым именем в текущей папке с расширением `png`
    * `**/*.png` - Файлы с любым именем в любой папке, которая находится в текущей на любой вложенности с расширением `png`
    * `*.{png,jpg}` - Файлы с любым именем в текущей папке с расширением `png` или `jpg`. **Важно. `{png,jpg}` Без пробелов.**
    * `['imgs/**/*.png','pics/**/*.jpg']` - Файлы находящиеся в папке `img` на любой вложенности с расширением `png`, и файлы находящиеся в папке `pics` на любой вложенности с расширением `jpg`
    * `['**/*.png','!node_modules']` - Файлы с любым именем в любой папке, которая находится в текущей на любой вложенности с расширением `png`, кроме директории `node_modules`
  * `on('data', fn(file))` - Метод потока. Позволяет обработать событие `data`, при срабатывании которого выполняется функция обработчик `fn` с аргументом `file`, который представляет собой объект с данными об этом файле. Свойства этого объекта:
    * `contents` - (Исходный параметр) Сам контент, который мы можем вычитать из текущего файла
    * `path` - (Исходный параметр) Полный путь к нашему файлу
    * `cwd` - (Исходный параметр) Полный путь к директории с текущим файлом
    * `base` - (Исходный параметр) Основа для пути относительно текущей директории (перед звездочками)
    * `relative` - (Расчетный параметр) Изменяемая часть пути к искомым файлам (Начиная со звездочек)
    * `dirname` - (Расчетный параметр) Имя папки с абсолютным путем к ней `(Gulp 4)`
    * `basename` - (Расчетный параметр) Имя файла вместе с расширением `(Gulp 4)`
    * `stem` - (Расчетный параметр) Имя файла без расширения `(Gulp 4)`
    * `extname` - (Расчетный параметр) Расширение файла `(Gulp 4)`

* `gulp.src('**/*.png', {base: 'images'})` - Метод. Для файлов с любым именем в любой папке, которая находится в текущей на любой вложенности с расширением `png`, за основу будет взята папка `images` - будет использована текущая задача. Возвращает `stream` для последующей обработки выбранных файлов

```javascript
gulp.src('client/templates/*.pug')
```


* `gulp.dest(path)` - Метод. Указывает куда поместить (path) обработанные файлы

```javascript
gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
```

* `gulp.parallel(tasks)` - Метод. Запускает параллельно список задач `tasks` или функций, выполняющих определенные задачи `(Gulp 4)`

```javascript
gulp.task('html', gulp.parallel(
    'images',
    'html',
    function() {
        return gulp.src('*.html')
            .pipe(gulp.dest('./bin'));
    }
));
```

* `gulp.series(tasks)` - Метод. Запускает список задач `tasks`  или функций последовательно `(Gulp 4)`

```javascript
gulp.task('html', gulp.series(
    gulp.parallel('images', 'html-style'),
    'html',
    function() {
        return gulp.src('*.html')
            .pipe(gulp.dest('./bin'));
    }
));
```

## Примеры

```javascript
const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

gulp.task('html', () => (
    gulp.src('client/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'))
));

gulp.task('css', () => (
    gulp.src('client/templates/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'))
));

gulp.task('default', ['html', 'css']);
```

## Плагины

* [gulp-pug](https://www.npmjs.com/package/gulp-pug) - Плагин для работы с `Pug`
* [gulp-less](https://www.npmjs.com/package/gulp-less) - Плагин для работы с `Less`
* [gulp-sass](https://www.npmjs.com/package/gulp-scss) - Плагин для работы с `Sass/Scss`
* [gulp-csso](https://www.npmjs.com/package/gulp-csso) - Плагин для минификации `CSS`-файлов