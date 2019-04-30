[Главная](../README.md)

***

# React.JS

* [Старт]
* [React-элементы]
* [JSX]
* [React-компоненты]
  * [Функциональные компоненты]
* [Передача данных в компонент `props`]
* [Вывод массива данных]

## Старт

*Запуск простейшего приложения на React.JS:*

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <h1>Hello world</h1>,
  document.getElementById('root')
);
```

## React-элементы

*Натуральный React-элемент без JSX выглядит:*

```javascript
const el = React.createElement(
  'div',
  {className: 'test'},
  'Hello World',
  React.createElement('span', null, 'Span text')
);
```

## JSX

**Атрибуты**

* `className` - class
* `htmlFor` - for

**Вставка в JavaScript**

```javascript
<div>{ /*JS-code*/ }</div>
```

**Вставка атрибутов**

```javascript
const SearchPanel = () => {
  const searchText = 'Type here to search';
  return <input placeholder={searchText} />;
};
```

**Вставка inline-стилей**

```javascript
const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px'
  }

  return <input
    style={searchStyle}
    placeholder={searchText}
  />;
};
```

**Аргументы без передачи значения**

```javascript
const SearchPanel = () => {
  return <input
    placeholder="Search..."
    disabled// тоже самое, что и disabled={true}
  />;
};
```

**Вставка стороннего React-элемента**

```javascript
const App = () => {
  const loginBox = <span>Log in please</span>;

  return (
    <div>
      { loginBox }
      <h1>Hello world</h1>
    </div>
  );
};
```

## React-компоненты

### Функциональные компоненты

```javascript
const Cmp = () => {
  return (
    // Body
  );
};
```

## Передача данных в компонент `props`

*Отправка данных в компонент `TodoListItem`*

```javascript
// file TodoList.js
import React from 'react';

import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
  return (
    <ul>
      <li><TodoListItem label="Drink Coffee"/></li>
      <li>
        <TodoListItem
          label="Build React App"
          important
        />
      </li>
    </ul>
  );
};

export default TodoList;
```

*Прием данных в файле компонента `TodoListItem`*

```javascript
// file TodoListItem.js
import React from 'react';

// Деструктуризация объекта `props`
// `{label, important=false} = props`
const TodoListItem = ({ label, important=false }) => {

  const style = {
    color: important ? 'tomato' : 'black'
  }

  return (
    <span style={style}>{ label }</span>
  );
};

export default TodoListItem;
```

## Вывод массива данных

```javascript
const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    return (
      <li key={item.id}>
        <TodoListItem
          label={item.label}
          important={item.important}
        />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};
```

**Оптимизировано при помощи spread-оператора**

```javascript
const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (
      <li key={id}>
        <TodoListItem { ...itemProps } />
      </li>
    );
  });

  return (
    <ul>
      { elements }
    </ul>
  );
};
```