const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session'); // Пакет для работы с сессиями

const app = express();

app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Установка сессии
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

app.use(express.static(path.join(__dirname, './public/')));

app.all('/', (req, res, next) => {
  console.log(req.session.id); // Вывод ID сессии
  req.session.views = req.session.views === 0 ? 0 : req.session.views; // Добавление новой сессионной переменной
  req.session.views++;
  next();
});

app.use('/', require('./routes/index'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error page',
    message: err.message,
    error: err
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server was running on port: ${server.address().port}`);
});