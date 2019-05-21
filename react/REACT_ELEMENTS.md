[Главная](../README.md#readme) > [ReactJS](./README_REACT.md#readme)

***

# React-элементы

## JSX представляет собой объекты

*Следующие два примера кода эквивалентны между собой:*

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```