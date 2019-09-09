# Commander

*Команды `-h/--help` и `-V/--version` - встроены*

**Пример 1**

```javascript
const program = require('commander');

program
  .version('1.0.0')
  .option('-p, --peppers', 'Add peppers') // Булевская операция
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbqSauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add specified type of cheese [marble]', 'marble') // С необязательным параметром (Последний аргумент - значение по умолчанию)
  .parse(process.argv);

console.log('Your pizza with:');

if (program.peppers) {
  console.log('  - peppers');
}
if (program.pineapple) {
  console.log('  - pineapple');
}
if (program.bbqSauce) {
  console.log('  - bbq');
}
console.log('  - %s cheese', program.cheese);
```