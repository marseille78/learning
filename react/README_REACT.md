[Главная](../README.md)

***

# React.JS

* [Старт]
* [React-элементы]
* [JSX]
* [React-компоненты]
  * [Функциональные компоненты]
  * [Класс-компоненты]
* [Передача данных в компонент `props`]
* [Вывод массива данных]
* [События]
  * [Обработка событий]
  * [События буфера обмена]
  * [События клавиатуры]
  * [События фокуса]
  * [События формы]
  * [События мыши]
  * [События выбора]
  * [События UI]
  * [События изображения]
* [Внутреннее состояние компонента]

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

*Используеться для простых компонентов, без состояния*

```javascript
const Cmp = () => {
  return (
    // Body
  );
};
```

### Класс-компоненты

*Используется, когда у компонента есть состояние*

```javascript
import React, { Component } from 'react';

class Cmp extends Component {
  render() {
    return (
      /* Body... */
    );
  }
}
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

## События

### Обработка событий

**Обработка события с привязкой `this` по новой возможности без `constructor`**

```javascript
class Cmp extends Component {

  handleClick = () => { /* Body */ }

  render() {
    return (
      <Cmp
        onClick={ this.handleClick }
      />
    );
  }
}
```

**Обработка события с привязкой `this` через `constructor` при помощи строчной функции**

```javascript
class Cmp extends Component {

  constructor() {
    super();

    this.handleClick = () => { /* Body */ }
  }

  render() {
    return (
      <Cmp
        onClick={ this.handleClick }
      />
    );
  }
}
```

**Обработка события с привязкой `this` через `constructor` при помощи `bind`**

```javascript
class Cmp extends Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { /* Body */ }

  render() {
    return (
      <Cmp
        onClick={ this.handleClick }
      />
    );
  }
}
```

### События буфера обмена

* `onCopy`
* `onCut`
* `onPaste`

### События клавиатуры

* `onKeyDown`
* `onKeyPress`
* `onKeyUp`

**Свойства:**

* `<boolean> altKey`
* `<number> charCode`
* `<boolean> ctrlKey`
* `<boolean> getModifierState(key)`
* `<string> key`
* `<number> keyCode`
* `<string> locale`
* `<number> location`
* `<boolean> metaKey`
* `<boolean> repeat`
* `<boolean> shiftKey`
* `<number> which`

### События фокуса

* `onFocus`
* `onBlur`

### События формы

* `onChange`
* `onInput`
* `onSubmit`
* `onInvalid(>= v16)`

### События мыши

* `onClick`
* `onContextMenu`
* `onDoubleClick`
* `onDrag`
* `onDragEnd`
* `onDragEnter`
* `onDragExit`
* `onDragLeave`
* `onDragOver`
* `onDragStart`
* `onDrop`
* `onMouseDown`
* `onMouseEnter`
* `onMouseLeave`
* `onMouseMove`
* `onMouseOut`
* `onMouseOver`
* `onMouseUp`

**Свойства:**

* `<boolean> altKey`
* `<number> button`
* `<number> buttons`
* `<number> clientX`
* `<number> clientY`
* `<boolean> ctrlKey`
* `<boolean> getModifierState(key)`
* `<boolean> metaKey`
* `<number> pageX`
* `<number> pageY`
* `<DOMEventTarget> relatedTarget`
* `<number> screenX`
* `<number> screenY`
* `<boolean> shiftKey`

### События выбора

* `onSelect`

### События UI

* `onScroll`

### События изображения

* `onLoad`
* `onError`

## Внутреннее состояние компонента

### Установление начального состояния

**Установление начального состояния в компонент (Новая возможность, без конструкора)**

```javascript
class Cmp extends React.Component {

  state = {
    done: false
  }

  render() {
    return ( /* Body */ );
  }
}
```

**Установление начального состояния в компонент при помощи конструкора**

```javascript
class Cmp extends React.Component {

  constructor() {
    super();

    this.state({
      done: false
    })
  }

  render() {
    return ( /* Body */ );
  }
}
```

### Получение текущего состояния компонента

```javascript
const currentState = this.state;
```

### Обновление текущего состояния

**Обновление состояния, которое не зависит от предыдущего**

```javascript
this.setState({
  key: resultValue
});
```

**Обновление состояния, которое не зависит от предыдущего с callbackk-функцией**

```javascript
this.setState({
  key: resultValue
}, () => { /* Body */ });
```

**Обновление состояния, которое зависит от предыдущего**

```javascript
this.setState((state) => {
  return {
    key: resultValue
  }
});
```