# React.JS - взаимодействие с сервером

1. React ничего не знает о работе с сервером - это задача других библиотек
2. Сетевой код следует изолировать от кода компонентов
3. Если необходимо, трансформируйте данные до того, как их получит компонент
4. Обрабатывайте состояний "загрузка" и "ошибка"
5. Разделяйте ответственность компонентов: логику и рендеринг

## Создание класса для создание запросов

**Создание файла `/services/something-service.js`**

```javascript
export default class SomethingService {

  constructor() {
    this._apiBase = 'https://swapi.co/api';
  }

  // Функция отправки запроса
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  }

  // Сразу с получением массива элементов
  async getAllItems() {
    const res = await this.getResource(`/items/`);
    return res.results.map(this._transformData);
  }

  // Получение одного элемента по идентификатору
  async getItem(id) {
    const item = await this.getResource(`/items/${id}/`);
    return this._transformData(item);
  }

  // Получение элемента данных, отсутствующих полученном ответе (извлечение ID)
  _extractId(item) {
    const idRegExp = /\/(\d*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  // Трансформация данных
  _transformData(item) {
    return {
      id: this._extractId(item),
      name: item.name,
    };
  }
}
```

**Подключение сервиса в компоненте**

```javascript
import React, { Component } from 'react';
import SomethingService from '../../services/something-service';

export default class NameComponent extends Component {
  constructor() {
    super();
    
    this.state = {
      // BaseState
    };

    this.somethingService = new SomethingService();

    this.someMethod = this.someMethod.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      // BODY
    });
  }

  someMethod() {
    const id = NUM;
    this.somethingService
      .getItem(id)
      .then(this.changeState)
  }
}
```