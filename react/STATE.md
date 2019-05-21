[Главная](../README.md#readme) > [ReactJS](./README_REACT.md#readme)

***

# Состояние и жизненный цикл

## Состояние

**Может быть только у классового элемента**

*Обычная установка состояния (при помощи конструктора):*

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Установка состояния
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

*Новая установка состояния (без помощи конструктора):*

```javascript
class Clock extends React.Component {

  // Установка состояния
  this.state = {date: new Date()};

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

**Обновление состояния (асинхронный процесс)**

*Используем, когда новое состояние не зависит от значения предыщущего*

```javascript
this.setState({
  date: new Date()
})
```

*С использованием callback-функции, если нужно получить гарантированное значение состояния после обновления*

```javascript
this.setState({
  date: new Date()
}, () => console.log(this.state.date));
```

*Когда новое состояние зависит от старого*

```javascript
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```

## Методы жизненного цикла

* `componentDidMount()` - запускается после того, как компонент отрендерился в DOM

```javascript
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}
```

* `componentWillUnount()` - запускается перед уничтожением компонента

```javascript
componentWillUnmount() {
  clearInterval(this.timerID);
}
```