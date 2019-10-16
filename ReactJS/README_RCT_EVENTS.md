# События

* `onClick` - Клик по елементу
* `onBlur` - Снятие фокуса с поля ввода

## Примеры обработки

```javascript
class ClassName extends Component {

  constructor() {
    super();

    // Привязка this к текущему объекту
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(`Done: ${this.props.label}!!!`);
  }

  render() {

    return (
        <button
          onClick={ this.handleClick }
        >
          Click me
        </button>
    );
  }
}
```

**Другой вариант привязки `this` (пока не в стандарте)**

```javascript
class ClassName extends Component {

  handleClick = () => {
    console.log(`Done: ${this.props.label}!!!`);
  }

  render() {

    return (
        <button
          onClick={ this.handleClick }
        >
          Click me
        </button>
    );
  }
}
```