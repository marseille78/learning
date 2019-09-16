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

**Пример 2 (с пользовательскими функциями)**

```javascript
const program = require('commander');

function range(val) {
  return val.split('..').map(Number);
}

function list(val) {
  return val.split(',');
}

// memo - Куда сохраняются аргументы
function collect(val, memo) {
  memo.push(val);
  return memo;
}

function increaseVerbosity(v, total) {
  return total + 1;
}

// Произвольная пользовательская функция
function any(val) {
  return val;
}

program
  .version('0.0.1') // Версия программы
  .usage('[options] <file ...>') // указывается, что будет использоваться
  .option('-a, --any <n>', 'Any argument', any) // Произвольное преобразование данных
  .option('-i, --integer <n>', 'An integer argument', parseInt) // Передача числового целого значения, обрабатывается стандартным методом (parseInt)
  .option('-f, --float <n>', 'A float argument', parseFloat) // Передача числового дробного значения, обрабатывается стандартным методом (parseFloat)
  .option('-r, --range <a>..<b>', 'A range', range) // Передаются границы промежутка, обрабатывается самописной функцией (range)
  .option('-l, --list <items>', 'A list', list) // Передаются аргументы через запятую, возвращается массив аргументов. Обрабатывается самописной функцией (list)
  .option('-o, --optional [value]', 'An optional value') // Логический аргумент
  .option('-c, --collect [value]', 'A repeatable value', collect, []) // Получение массива значений, которые добавляются в массив о очереди
  .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0) // Увеличивает наше значение
  .parse(process.argv);

// %s - строка
// %d - число
// %j - JSON.stringify
console.log(' any: %j', program.any);
console.log(' int: %j', program.integer);
console.log(' float: %j', program.float);
console.log(' optional: %j', program.optional);
program.range = program.range || []; // Или range или пустой массив
console.log(' range: %j..%j', program.range[0], program.range[1]);
console.log(' list: %j', program.list);
console.log(' collect: %j', program.collect);
console.log(' verbose: %j', program.verbose);
console.log(' args: %j', program.args);

// ~ node main.js -a test -i 10 -f 3.1415 -r 3..5 -l gh,34,bums -o -c 4 -c 5 -c 9 adding_arg

// any: "test"
// int: 10
// float: 3.1415
// optional: true
// range: 3..5
// list: ["gh","34","bums"]
// collect: ["4","5","9"]
// verbose: undefined
// args: ["adding_arg"]
```