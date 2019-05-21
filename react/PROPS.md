[Главная](../README.md#readme) > [ReactJS](./README_REACT.md#readme)

***

# Компоненты и пропсы

**Примечание: Всегда называйте компоненты с заглавной буквы.**

## Функциональные компоненты

*Используются если в компоненте не предусмотрено внутреннее состояние*

```javascript
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
```

## Классовые компоненты

*Используется если в компоненте предусмотрено внутреннее состояние*

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}
```

## Пропсы

*Используются для передачи данных в компонент*

```javascript
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}

const element = <Welcome name="Алиса" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Давайте разберём, что именно здесь происходит:

1. Мы передаём React-элемент `<Welcome name="Алиса" />` в `ReactDOM.render()`.
2. React вызывает наш компонент `Welcome` с пропсами `{name: 'Алиса'}`.
3. Наш компонент `Welcome` возвращает элемент `<h1>Привет, Алиса</h1>` в качестве результата.
4. React DOM делает минимальные изменения в DOM, чтобы получилось `<h1>Привет, Алиса</h1>`.