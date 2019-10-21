# Состояния

## Объявление состояния компонента

```javascript
class ClassName extends Component {

  constructor() {
    super();

    // Начальные данные состояния
    this.state = {
      done: false
    };
  }
  // ...
}
```

**Другой вариант объявления начального состояния (пока не в стандарте)**

```javascript
class ClassName extends Component {
  // Начальные данные состояния
  state = {
    done: false
  };
  // ...
}
```

## Изменение состояния

**Если текущее состояние не зависит он предыдущего**

```javascript
handleClick() {
  this.setState({
    done: true
  });
}
```

**Если текущее состояние зависит от предыдущего**

```javascript
handleClick() {
  this.setState(({done}) => {
    return {
      done: !done
    };
  });
}
```

**Если текущее состояние зависит от предыдущего (вариант с деструктуризацией состояния)**

```javascript
handleClick() {
  this.setState((state) => {
    return {
      important: !state.important
    };
  });
}
```

**Удаление элемента из состояния**

```javascript
// state
this.state = {
  todoData: [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ]
};
```

```javascript
handleDelete(id) {
  this.setState(({ todoData }) => {
    return {
      todoData: todoData.filter((item) => item.id !== id)
    };
  });
}
```