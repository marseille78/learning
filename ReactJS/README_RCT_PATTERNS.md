# Паттерны React

## Использование функций

* Функции, которые мы передаем компоненту, могут быть не только обработчиками событий
* Фуркция, к примеру, может инкапсулировать получение данных (тогда компонент становиться независимым от источника данных)

## Render-функция

*В компонент передается функция, которая рендерит часть компонента (или весь компонент)*

```jsx
<Component
  onEvent={this.handleEvent}
  getData={this.somethingService.getAllItems} // Передача функции получения данных
  renderItem={({arg1, arg2}) => (<div>{arg1} - {arg2}</div>)} // Передача функции, позволяющая варьировать сожержимое рендеринга (Обычно возвращает строку или React-элемент)
/>
```

## Свойства-элементы

* В качестве значения свойства можно передавать React-элемент

```jsx
<Component title={<h1>Hi</h1>}>
```

* Так же можно создавать элементы-контейнеры
* или элементы, которые умеют выбирать, что рендерить в зависимости от условия (загрузка, ошибка, и т.п.)

## Children

* Компоненту можно передавать одно из свойств, помести его в тело элемента

```jsx
<Card>How are you</Card>
```

* Это свойство доступно через **`props.children`**
* Поддерживает любые типы данных: `элементы`, `функции`, `обекты` и другие