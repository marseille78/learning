# [Gulp](https://gulpjs.com/)

* [Основа](https://github.com/marseille78/learning/blob/master/building/gulp/README.md#%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%B0)
* [Методы](https://github.com/marseille78/learning/blob/master/building/gulp/README.md#%D0%9C%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-gulp)
* [Примеры](https://github.com/marseille78/learning/blob/master/building/gulp/README.md#%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B)
* [Плагины](https://github.com/marseille78/learning/blob/master/building/gulp/README.md#%D0%9F%D0%BB%D0%B0%D0%B3%D0%B8%D0%BD%D1%8B)

## Основа

`npm install gulpjs/gulp#4.0` - Установка локально `Gulp 4`

`gulpfile.js` - Файл, в котором прописываются настройки для `Gulp`

Для работы необходимо подключить сам объект `Gulp`

`var gulp = require('gulp');`

`gulp` - Запуск из консоли задачи по умолчанию

`gulp taskName` - Запуск из консоли задачи `taskName`

`gulp --tasks` - Вывод в консоли списка задач

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

* `gulp.src(path)` - Метод. Указывает для каких файлов с маской пути (path) будет использована текущая задача. Возвращает Readable-`stream` для последующей обработки выбранных файлов
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

* `gulp.src('**/*.png', {read: false})` - Метод. Для файлов с любым именем в любой папке, которая находится в текущей на любой вложенности с расширением `png`. Файлы будут находиться, но не будут читаться

* `gulp.src('**/*.png', {since: time})` - Метод. Для файлов с любым именем в любой папке, которая находится в текущей на любой вложенности с расширением `png`. Будут искаться файлы измененные начиная с времени `time`

```javascript
gulp.src('client/templates/*.pug')
```


* `gulp.dest(path)` - Метод. Указывает куда поместить (path) обработанные файлы. Возвращает writable-поток

```javascript
gulp.src('client/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build/html'))
```

* `gulp.watch(files, [tasks])` - Метод. Отслеживает изменения в файлах `files`, при изменении которых будут запускаться задачи `tasks`

```javascript
gulp.task('watch', ['default'], () => {
    gulp.watch('**/*.less', ['css']);
    gulp.watch('**/*.js', ['js']);
    gulp.watch('**/*.html', ['html']);
});
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

* `gulp.lastRun(task)` - Метод. Возвращает время последнего запуска задачи `task`

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
* [gulp-concat](https://www.npmjs.com/package/gulp-concat) - Плагин для склеивания `CSS` и `JS` файлов
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) - Плагин для автоматического подставления `CSS`-префиксов
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) - Плагин для создания `sourcemaps`
* [gulp-if](https://www.npmjs.com/package/gulp-if) - Плагин для создания условий выполнения задач
* [yargs](http://yargs.js.org/) - Библиотека для работы с аргументами при запуске скрипта проекта
* [gulp-csscomb](https://www.npmjs.com/package/gulp-csscomb) - Плагин для приведения `CSS`-кода к красивому виду
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - Плагин для минификации `JS`-файлов
* [gulp-handlebars](https://www.npmjs.com/package/gulp-handlebars) - Плагин для работы с шаблонизатором `Handlebars`
* [gulp-svgo](https://www.npmjs.com/package/gulp-svgo) - Плагин для оптимизации `SVG`-файлов
* [gulp-svg-sprites](https://www.npmjs.com/package/gulp-svg-sprites) - Плагин для создания `SVG`-спрайтов
* [gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) - Модуль для компактного подключения плагинов
* [gulp-define-module](https://www.npmjs.com/package/gulp-define-module) - Плагин, который преобразует обычные модули в `ES6`-модули
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) - Плагин для оптимизации изображений на лету
* [gulp-wrap](https://www.npmjs.com/package/gulp-wrap) - Библиотека для  оборачивания контента
* [gulp-task-listing](https://www.npmjs.com/package/gulp-task-listing) - Плагин. Показывает все таски, которые у нас есть в `Gulp`
* [gulp-mocha](https://www.npmjs.com/package/gulp-mocha) - Плагин для тестирования
* [gulp-debug](https://github.com/sindresorhus/gulp-debug) - Плагин, который пропускает все через себя и выводит в консоль то, что через него проходит
* [gulp-newer](https://github.com/tschaub/gulp-newer) - Плагин, для фильтрации при переноске файлов. Он проверяет есть ли уже такой файл, и время его последней модификации. Если файл уже есть и внутри него свежая версия контента, то этот файл пропускается (alias gulp-changed)
* [gulp-changed](https://github.com/sindresorhus/gulp-changed#readme) - Плагин, для фильтрации при переноске файлов. Он проверяет есть ли уже такой файл, и время его последней модификации. Если файл уже есть и внутри него свежая версия контента, то этот файл пропускается (alias guld-newer)
* [gulp-remember](https://github.com/ahaurw01/gulp-remember) - Плагин, который запоминает содержимое файлов в своем внутреннем кэше. Для ускорения сборки
* [gulp-cached](https://github.com/gulp-community/gulp-cached) - Плагин, который запоминает файлы и их содержимое, которые через него проходят и если все совпадает, то файл просто пропускается
* [browser-sync](https://browsersync.io/) - Live-reload сервер
* [gulp-notify](https://github.com/mikaelbr/gulp-notify) - Плагин для оповещений пользователя
* [gulp-plumber](https://github.com/floatdrop/gulp-plumber) - Плагин для того, чтобы `Gulp` не падал каждый раз при ошибке. Позволяет единожды в задаче но на всю ее повесить обработчик ошибки
* [multipipe](https://github.com/juliangruber/multipipe#readme) - Плагин, объединяющий несколько потоков в один. (Можно поставить обработчик ошибки на один объединенный поток)(alias `stream-combiner2`)
* [stream-combiner2](https://github.com/substack/stream-combiner2) - Плагин, объединяющий несколько потоков в один. (Можно поставить обработчик ошибки на один объединенный поток)(alias `multipipe`)
* [through2](https://github.com/rvagg/through2#readme) - Модуль для создания плагинов в `Gulp`