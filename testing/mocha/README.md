# Mocha

***(mocha, сорт кофе)*** - тест-фреймворк - набор методов, который позволяет описывать тесты в коде. Отвечает на вопрос "что тестировать": позволяет описывать наборы тестов и тестовые случаи

## Наборы тестов `test suites`

Группы проверок, связанные одной общей темой

* describe(str, fn)
* suite(str, fn)

## Тестовые случаи `test cases`

Конкретные проверки, правильно ли работают выражения в коде

* it(str, fn)
* case(str, fn)

assert - Метод. Проверяет на правдивость выражение
assert.equal
assert.notEqual
assert.strictEqual
assert.notStrictEqual - проверяет равны ли два выражения
assert.deepEqual
assert.notDeepEqual - проверяет равны ли объекты по значению
assert.throws
assert.doesNotThrow - проверяет, падает ли функция с ошибкой