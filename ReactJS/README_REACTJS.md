# React.JS

`create-react-app DIR` - автоматическое создание проекта в директории `DIR`

## Создание базового приложения

```javascript
// Подключение базовых библиотек
import React from 'react';
import ReactDOM from 'react-dom';

// Создание React-элемента при помощи JSX
const el = <h1>Hello World</h1>;
console.log(el); // Объект маленького размера, по сравнению с обычным DOM-объектом
console.dir(document.createElement('h1'));

// Создание React-элемента средствами React
// const el = React.createElement('h1', {}, 'Hello from createElement');

ReactDOM.render(
  el,
  document.getElementById('root')
);
```

## Объект React

**React.Fragment**

Виртуальный блок-держатель, который оборачивает JSX-содержимое не имеющее единого оборачивающего блока

```jsx
<React.Fragment>
  <div/>
  <div/>
</React.Fragment>
```