# React компоненты

```javascript
const SearchPanel = () => {
  return <input placeholder="search"/>;
};
```

```javascript
const App = () => {
  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  );
};
```

## Подключение компонента в рендер приложения

```javascript
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
```

## Получение свойств

* Объект `props` передается в каждый компонент

```javascript
const Comp = (props) => {
  return (<i>{ props.name }</i>);
};
```

* Можно передавать любые значения (не только строки)

**Сразу деструктурируем `props`**

```javascript
const TodoListItem = ({ label }) => {
  console.log(label);
  return <span>{ label }</span>;
};
```

## Разбор массива данных

```javascript
const TodoList = ({todos}) => {
  const elements = todos.map((item) => {
    return (
      <li>
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

**Разбор массива данных с деструктуризацией при помощи `Object spread` оператора**

```javascript
const TodoList = ({todos}) => {
  const elements = todos.map((item) => {
    return (
      <li>
        <TodoListItem { ...item } /> // Передаем все свойства объекта данных
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

**Передача всех пропсов без идентификатора**

```javascript
const TodoList = ({todos}) => {
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