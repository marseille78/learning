# Readline

## Инициализация

```javascript
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin, // ввод из стандартного потока
  output: process.stdout // вывод в стандартный поток
});
```

**Обработка каждой введенной строки**

```javascript
rl.on('line', function (cmd) {
  console.log('You just typed: '+cmd);
});
```

**Получение ответа на вопрос (аналогично prompt в браузере):**

```javascript
rl.question('What is your favorite food?', function (answer) {
  console.log('Oh, so your favorite food is ' + answer);
});
```

**Пауза (блокирование ввода):**

```javascript
rl.pause()
```

**Разблокирование ввода:**

```javascript
rl.resume()
```

**Окончание работы с интерфейсом readline:**

```javascript
rl.close()
```