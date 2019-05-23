[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# path

## Сойства и методы

* `path.relative(DIR1, DIR2)` - Метод. Позволяет найти относительный путь из папки `DIR1` в папку `DIR2`

```javascript
console.log('path.relative: ', path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// path.relative:  ..\..\impl\bbb
```

* `path.resolve(PATH1, PATH2, ...)` - Метод. Собирает из кусков пути абсолютный путь

```javascript
console.log('path.resolve: ', path.resolve('/foo/bar', './baz'));
// path.resolve:  D:\foo\bar\baz
```

* `path.normalize(PATH)` - Метод. Приводит путь `PATH` к нормальному виду

```javascript
console.log('path.normalize: ', path.normalize('/foo/bar//baz/asdf/quux/..'));
// path.normalize:  \foo\bar\baz\asdf
console.log('path.normalize: ', path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
// path.normalize:  C:\temp\foo\
```

* `path.parse(PATH)` - Метод. Парсит путь `PATH`

```javascript
console.log('path.parse: ', path.parse('/home/user/dir/file.txt'));
/*
path.parse:
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

* `path.join(PATH1, PATH2, ...)` - Метод. Объединяет пути в один сразу с нормализацией

```javascript
console.log('path.join: ', path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// path.join:  \foo\bar\baz\asdf
```

* `path.sep` - Свойство. Разделитель для данной ОС

```javascript
console.log('path.sep: ', path.sep);
// path.sep:  \
```