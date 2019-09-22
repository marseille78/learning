# Handlebars (hbs)

*Разновидность `handlebars`, которая легче рендерит шаблоны для `Node JS`*

## Компиляция

**Компиляция шаблона:**

```javascript
// Компиляция шаблона из строки STRING
// И запуск его с данными DATA
const TPL = hbs.compile(STRING);
TPL(DATA);
```

## Хелперы

`helper` - функция, которая возвращает HTML-код

**Регистрация блочного хелпера в файле *.js:**

```javascript
// NAME - имя хелпера
// CODE - Необязательный произвольный JS-код
// context - передаваемые данные
// options - объект с настройками
// options.name - имя хелпера
// options.hash - объект, который содержит в себе атрибуты хелпера
// options.fn - функция, которая генерирует HTML
// hbs.SafeString(STR) - указывает, что строку STR не нужно экранировать (важно для возвращения HTML-кода)
hbs.registerHelper(NAME, (context, options) => {
  CODE
  return hbs.SafeString(
    `<div>${options.fn(context)}</div>`// Необязательное обертывание тегом <div>
  );
})
```

*Вызов в файле `*.hbs`*

```handlebars
<!-- Вызов хелпера NAME -->
<!-- DATA - объект с данными -->
<!-- PROP - свойство объекта данных -->
{{#NAME DATA}}
  <div>{{PROP}}</div>
{{/NAME}}
```

**Регистрация хелпера с атрибутами в файле *.js:**

```javascript
hbs.registerHelper(NAME, (context, options) => {
  // Формирование массива атрибутов
  const attrs = [];
  for (const prop in options.hash) {
    attrs.push(`${prop}="${options.hash[prop]}"`);
  }
  return hbs.SafeString(
    // Выводит элемент с набором атрибутов и строкой из context
    `<div ${attrs.join(' ')}>${context}</div>`
  );
});
```

*Вызов с симуляцией `hbs.SafeString()`*

```handlebars
<!-- {{{}}} - эмулирует hbs.SafeString() -->
<!-- 'Vegetables' - строка контекста -->
<!-- href='/veggies' - передача атрибута -->
<div id="particles">
  {{{link 'Vegetables' href='/veggies'}}}
</div>
```

## Встроенные хелперы

**Перебор массива:**

```handlebars
<!-- Перебор массива ARR -->
<!-- this - Элемент массива на текущей итерации -->
<!-- @index - индекс текущего элемента -->
<!-- else - срабатывает, если массив не был передан -->
<ul>
  {{#each ARR}}
    <li class="{{this.name}}">{{@index}}: {{this.name}}</li>
  {{else}}
    <li>Список пуст</li>
  {{/each}}
</ul>
```

**Условие:**

```handlebars
<!-- Если существует в объекте полученных данных поле PROP - выполняется первый блок -->
<!-- Иначе второй -->
<div>
  {{#if PROP}}
    <p>CODE1</p>
  {{else}}
    <p>CODE2</p>
  {{/if}}
</div>
```

*Встроенные переменные*

* `@index` - индекс элемента на текущей итерации

## Партиции

`partial` - Часть кода, которую мы можем повторно использовать

**Регистрация партиций в файле *.js:**
```javascript
// DIR - директория, в которой лежат партиции
hbs.registerPartials(DIR)
```

*Вызов партиции в файле `*.hbs`*

```handlebars
<!-- Подключение партиции NAME в переборе массива данных ARR -->
<!-- this - данные для текущей итерации массива -->
{{#each ARR}}
  {{> NAME this}}
{{/each}}
```

**Регистрация партиции при помощи хелпера в файле *.js:**

```javascript
hbs.registerHelper(NAME, (options) => {
  return optitons.hash.class === 'block' ? 'block' : 'user';
});
```

*Вызов партиции из хелпера в файле `*.hbs`*

```handlebars
<!-- Вызов партиции из хелпера NAME -->
<!-- с переданным атрибутом class="block" -->
{{> (NAME class="block") }}
```