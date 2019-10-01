const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const favicon = require('serve-favicon');

const app = express();

// Установка favicon
app.use(favicon(path.join(__dirname, './public/favicon.ico')));

app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './public/')));

// Логирование
// Пред обработкой всех запросов, пропускаем их через логирование
// {flags: 'a'} - Указывает, что каждая последующая запись будет аппендиться
const log = fs.createWriteStream('mylog.log', {flags: 'a'});
// Режимы:
// combinend - режим для продакшена (показывает полный путь)
// short
// tiny
// dev - режим для разработки
// {stream: log} - Необязательный параметр (Передает на запись в файл поток записи "log")
// Без него это будет выводиться в консоль
app.use(morgan('combined', {stream: log}));
// app.use(morgan('dev'));

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
  console.log(`Server is running on port: ${server.address().port}`);
});