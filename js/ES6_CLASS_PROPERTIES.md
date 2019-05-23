[Главная](../README.md#readme) > [JavaScript](./README_JS.md#readme) > [ES6](./ES6.md#readme)

***

# Свойства классов

**Стандартную запись класса, которая уже в спецификации:**

```javascript
class Counter {
  constructor() {
    this.count = 0;
    this.increment = () => {
      this.count += Counter.incrementStep;
    }
  }
}

Counter.incrementStep = 2;
Counter.incrementAll = function (arr) {
  arr.forEach((c) => c.increment());
}
```

**Можно записать в новом виде, которого пока еще нет в спкцификации:**

```javascript
class Counter {
  count = 0;

  increment = () => {
    this.count += Counter.incrementStep;
  }

  static incrementStep = 2;
  static incrementAll = function (arr) {
    arr.forEach((c) => c.increment());
  }
}
```

**Статические свойства и методы** могут вызываться без создания экземпляра класса

* `static incrementStep = 2;` - Объявление статического свойства
* `static incrementAll = function (arr) { /* body */ }` - Объявление статического метода