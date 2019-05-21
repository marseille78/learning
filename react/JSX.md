[Главная](../README.md#readme) > [ReactJS](./README_REACT.md#readme)

***

# JSX

## Встраивание выражений в JSX

```javascript
const name = 'Иван-Царевич';
const element = <h1>Здравствуй, {name}!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## Использование атрибутов JSX

```javascript
const element = <div tabIndex="0"></div>;
```

```javascript
const element = <img src={user.avatarUrl}/>;
```

## Ограничения

* стиль наименования атрибутов использует camelCase - **tabIndex**
* атрибут `class` - **className**