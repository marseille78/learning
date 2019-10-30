# Методы жизненного цикла

## Этапы

1. **MOUNTING** - компонент создается
   1. `consrtuctor()`
   2. `render()`
   3. `componentDidMount()` - Действия после создания компонента
2. **UPDATES** - обновления (*Вызываются новыми свойствами `New props` или новым состоянием `setState()`*)
   1. `render()` - получаем новое дерево элементов
   2. `componentDidUpdate()` - Действия после того, как компонент обновился
3. **UNMOUNTING** - Удаление компонента
   1. `componentWillUnmount()` - Действия перед удалением компонента
4. **ERROR** - компонент получает какую-нибудь ошибку
   1. `componentDidCatch()` - Когда происходит ошибка, которая не была поймана

## `componentDidMount()`

*Вызывается после того, как компонент в первый раз удачно проинициализировался и отрисовался для страницы*

Когда этот метод вызван - это означает, что DOM-элементы уже гарантировано находятся на странице и они проинициализированы

Этот метод - самое подходящее место для того, чтобы проводить первоначальную инициализацию компонента или делать какие-то запросы к API и начинать асинхронное получение данных. Инициализация сторонних библиотек

## `componentDidUpdate()`

*Вызывается сразу после обновления компонента в результате получения новых свойств `new Props` или нового состояния `setState()`*

Когда эта функция выполняется `State` уже обновлен
```javascript
// prevProps - предыдущий props
// prevState - предыдущий state
componentDidUpdate(prevProps[, prevState]) {
  if (this.props.itemId !== prevProps.itemId) {
    // CODE
  }
}
```

Используется, когда компоненту нужно обновляться в результате обновления свойств.

## `componentWillUnmount()`

*Вызывается перед тем, как компонент окончательно очистится*

Используется для очистки тех ресурсов (напр. таймеры, `clearInterval` или запросов к серверу), с которыми работал компонент. Когда он вызывается, DOM-дерево все еще содержит компонент

## `componentDidCatch()`

*Его задача обработка непойманных ошибок в других методах жизненного цикла React-компонента и в реализации рендеринга*

```javascript
// error - сама ошибка
// info - детали того, в каком компоненте она произошла
componentDidCatch([error, info]) {
  // BODY
}
```

**Применение**

```javascript
// Ставим в состояние начальный флаг наличия ошибки
state = {
  // ...
  hasError: false
};

componentDidCatch() {
  this.setState({
    hasError: true
  });
}

// ...

render() {
  if (this.state.hasError) {
    return ERROR_RENDERING;
  }

  return COMPONENT;
}
```