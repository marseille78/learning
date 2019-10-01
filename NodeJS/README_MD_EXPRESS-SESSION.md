# express-session

*Работа с сессиями*

1. Подключение

```javascript
const session = require('express-session');
```

2. Установка сессии

```javascript
app.use(session({
  secret: 'loftschool', // Ключевое слово, которое должно храниться в конфигурационном файле (Секретное слово для шифрования)
  key: 'key', // Имя сессионной куки

  // Настройки самой куки
  cookie: {
    path: '/', // Пути использования куки ('/' - Используется по всему сайту/домену)
    httpOnly: true, // Защита от скачивания куки на клиенте
    maxAge: null // Время жизни куки в ms (null - живет бесконечно)
  },

  // Обязательные настройки
  saveUninitialized: false,
  resave: false
}));
```

3. Добавление сессионной переменной

```javascript
app.all('/', (req, res, next) => {
  console.log(req.session.id); // Вывод ID сессии
  req.session.views = req.session.views === 0 ? 0 : req.session.views; // Добавление новой сессионной переменной
  req.session.views++;
  next();
});
```

[Пример](./examples/session/)