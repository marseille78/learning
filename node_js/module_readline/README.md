[Главная](../../README.md#readme) > [Node.JS](../README.md#readme)

# Модуль [Readline](https://nodejs.org/dist/latest-v10.x/docs/api/readline.html)

*Модуль позволяющий построчно считыва   ть содержимое из различных источников*

***

- [Модуль Readline](#%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C-readline)
    - [Class: Interface](#class-interface)
    - [Свойства и методы `readline`](#%D0%A1%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0-%D0%B8-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%8B-readline)
    - [События экземпляра класса `readline: Interface`](#%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F-%D1%8D%D0%BA%D0%B7%D0%B5%D0%BC%D0%BF%D0%BB%D1%8F%D1%80%D0%B0-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0-readline-interface)
    - [Пример](#%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80)

***

## Class: Interface

Экземпляры класса `readline.Interface` создаются с помощью метода `readline.createInterface()`. Каждый экземпляр ассоциируется с единственным читаемым стримом `input` и единственным стримом `output`, открытым для записи. Стрим `output` используется для вывода на экран приглашения ввода данных пользователем, которые поступают и считываются со стрима `input`.

## Свойства и методы `readline`

* `readline.createInterface(opt)` - Статический метод модуля `(readline)`. Создает экземпляр класса `Interface` с объектом опций `(opt)` в качестве аргумента
    * `input` - Поле объекта опций при создании экземпляра класса `Interface`. Поток чтения на ввод
        * `input: process.stdin`
    * `output` - Поле объекта опций при создании экземпляра класса `Interface`. Поток записи на ответ
        * `output: process.stdout`
    * `prompt` - Поле объекта опций при создании экземпляра класса `Interface`. Текст приглашения ко вводу сообщения. По умолчанию "`>`"
        * `prompt: 'text>'`
* `rl.prompt()` - Метод экземпляра (rl). Направляет поток записи на новую строку
* `rl.close()` - Метод экземпляра (rl). Закрывает экземпляр `readline.Interface` и отклоняет контроль над стримами `input` и `output`. При вызове этого метода генерируется событие `close`

## События экземпляра класса `readline: Interface`

* `rl.on('line', fn(text))` - Обработка события на экземпляре `readline: Interface` `(rl)`. Событие - введение сообщения. В обработчик `(fn)` в качестве аргумента передается текст сообщения `(text)`
* `close` - Закрытие связи с классом `readline: Interface`
* `error` - Событие возникновения ошибки в работе с классом `readline: Interface`

## Пример

```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI>'
});

rl.prompt();

rl.on('line', (line) => {
    line = line.trim();

    switch (line) {
        case 'hello':
            console.log('world!');
            break;
        case 'bye':
            rl.close();
            return;
        default:
            console.log(`Say what? I might have heard '${line}'`);
            break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
}).on('error', (err) => {
    console.log(err);
    process.exit(1);
});
```