[Главная](../README.md#readme) > [Node.JS](./README_NODEJS.md#readme)

***

# ReadLine

*Інтерактивні утіліти введення/виведення; в першу чергу для програм терміналу*

## Ініціалізація (створення інтерфейсу)

```javascript
const rl = readline.createInterface({
  input: process.stdin,// введення зі стандартного потоку
  output: process.stdout// виведення в стандартний потік
});
```

## Властивості і методи

* `rl.question(QUESTION, CB(ANSWER))` - Метод. Отримання відповіді на питання (аналогічно prompt в браузері)

```javascript
rl.question('What is your favourite food?> ', (answer) => {
  console.log(`Oh, so your favourite food is ${answer}`);
});
```

* `rl.pause()` - Метод. Пауза (блокування введення)
* `rl.resume()` - Метод. Розблокування введення
* `rl.close()` - Метод. Завершення роботи із інтерфейсом `readline`

## Події

* `line` - Введення радка

```javascript
rl.on('line', (cmd) => {
  console.log(`You just typed: ${cmd}`);
});
```