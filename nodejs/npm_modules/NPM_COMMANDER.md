[Главная](../README.md#readme) > [Node.JS](../README_NODEJS.md#readme)

***

# [commander](https://github.com/tj/commander.js#readme)

*Модуль предоставляє підтримку параметрів командної строки - флагів, що передають при виконанні додатку (наприклад -h або --help) для отримання інформації що до використання утіліти або додатка*

`npm install commander`

## Підключення

```javascript
const program = require('commander');
```

Для використання створюється ланцюжок з викликів `option` для всіх параметрів, що підтримує додаток.

В наступному коді додаток підтримує два параметри за замовченням:

* `-V` або `--version` - для версії
* `-h` або `--help` - для отримання підтримки

А також два спеціалізованих параметри:

* `-s` або `--source` - для отримання сайта-джерела
* `-f` або `--file` - для імені файла

```javascript
const program = require('commander');

program
  .version('0.0.1')
  .option('-s, --source [web site]', 'Source web site')
  .option('-f, --file [file name]', 'File name')
  .parse(process.argv);

console.log(program.source);
console.log(program.file);
```

Ми надаємо нестандартні параметри, а *Commander* надає параметри за замовченням для вивода версії і довідки. Якщо запустити додаток командою

`node index -h`

*Commander* виведе перелік параметрів, що підтримує

```
Usage: index [options]

Options:
  -V, --version            output the version number
  -s, --source [web site]  Source web site
  -f, --file [file name]   File name
  -h, --help               output usage information
```

Короткі параметри можна об'єднати (наприклад `-sf`); *Commander* вірно з ними відпрацює. Також підтримується конструкція вигляду `--file-name`, а в результатах використовується "верблюжий регістр" `fileName`

*Commander* також підтримує перетворення типів:

```javascript
.option('-i, --integer <n>', 'An integer argument', parseInt)
```

регулярні вираження:

```javascript
.option('-d, --drink [drink]', 'Drink', /^(coke|pepsi|izze)$/i)
```

і можливість передачі довільної кількості аргументів в останньому параметрі, наприклад, якщо ващ додаток може підтримувати декілька ключових слів, кількість яких заздалегіть невідома. Параметр `command` в таких випадках створюється наступним чином:

```javascript
const program = require('commander');

program
  .version('0.0.1')
  .command('keyword <keyword> [otherKeywords...]')
  .action(function(keyword, otherKeywords) {
    console.log('keyword %s', keyword);
    if (otherKeywords) {
      otherKeywords.forEach((oKey) => {
        console.log('keyword %s', oKey);
      });
    }
  });
  
program.parse(process.argv);
```

Командна строка

`$ node index.js keyword one two three`

Призводить до наступного результату

```
keyword one
keyword two
keyword three
```

## Простий парсінг `option`

* Умовні опції - повертає логічне значення
  * `.option('-f, --flag', 'describe')`
    * `-f, --flag` - ключі аргументів для виклику
    * `flag` - ім'я змінної для обробці в програмі (наприклад `program.flag`)
    * `describe` - опис опції, що буде відображений при виклику ключа `-h` або `--help`
* Опції з необов'язковим параметром
  * `.option('-f, --flag [arg]', 'describe', 'default')`
    * `[arg]` - Необов'язковий аргумент
    * `'default'` - Значення за замовченням
* Опції з обов'язковим параметром
  * `option('-f, --flag <arg>', 'describe')`
    * `<arg>` - Обов'язковий аргумент
* `program.parse(process.argv)` - Парсінг аргументів після отримання опцій

```javascript
const program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble');

program.parse(process.argv);

console.log('You ordered pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
```

## Парсінг з обробкою даних

* Обробка стандартной JS-функцієй. Просто її підключаємо

```javascript
const program = require('commander');

function myParseInt(num) {
  return parseInt(num);
  // Наданий аргумент
}

// Інкрементація значення
function increaseVerbosity(dummyValue, previous) {
  return previous + 1;
}

// Додання до коллекції, повертає масив
function collect(value, previous) {
  previous.push(value);
  return previous;
}

// Повертає масив з переліку
function commaSeparatedList(value) {
  return value.split(',');
}

program
  .version('0.0.1')
  .option('-f, --float <number>', 'Float argument', parseFloat)
  .option('-i, --integer <number>', 'Integer argument', myParseInt)
  .option('-v, --verbose', 'Verbosity that can be increased', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'Repeatable value', collect, [])
  .option('-l, --list <items>', 'Comma separated list', commaSeparatedList);

program.parse(process.argv);

if (program.float !== undefined) console.log(`float: ${program.float}`);
if (program.integer !== undefined) console.log(`integer: ${program.integer}`);
if (program.verbose > 0) console.log(`verbosity: ${program.verbose}`);
if (program.collect.length > 0) console.log('collect: ', program.collect);
if (program.list !== undefined) console.log('list: ', program.list);
```

```
$ node index.js -f 1e2
float: 100
```

```
$ node index.js -i 2.2
integer: 2
```

```
$ node index.js -v -v -v
verbosity: 3
```

```
$ node index.js -c a -c b -c c
collect:  [ 'a', 'b', 'c' ]
```

```
$ node index.js --list a,b,c
list:  [ 'a', 'b', 'c' ]
```