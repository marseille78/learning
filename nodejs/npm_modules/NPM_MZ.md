[Главная](../README.md#readme) > [Node.JS](../README_NODEJS.md#readme)

***

# [mz](https://github.com/normalize/mz#readme)

*Модуль що огортає промісами методи встроєні в Node.js*

## Промісіфікація

* `child_process`
* `crypto`
* `dns`
* `fs`

```javascript
const fs = require('mz/fs');

fs
  .readFile('data.json', 'utf8')
  .then((data) => {
    let result = JSON.parse(data);
    result.test = result.test + 10;
    return result;
  })
  .then((data) => {
    return fs.writeFile('data.json', JSON.stringify(data));
  })
  .then(() => {
    console.log('Done');
  })
  .catch((err) => {
    console.error(err);
  });
```

* `readline`
* `zlib`