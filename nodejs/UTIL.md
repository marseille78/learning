[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# Util

## Promisify

*Огортає в проміси будь яку функцію, що працює на колбеці*

```javascript
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

readFile('data.json', 'utf8')
  .then((data) => {
    let result = JSON.parse(data);
    result.test = result.test + 10;
    return result;
  })
  .then((data) => {
    return writeFile('data.json', JSON.stringify(data));
  })
  .then(() => {
    console.log('Done');
  })
  .catch((err) => {
    console.error(err);
  });
```