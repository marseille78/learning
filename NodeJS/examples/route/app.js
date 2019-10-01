const express = require('express');
const path = require('path');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'pug');

// Подключение статический файлов
app.use(express.static(path.join(__dirname, './public/')));

// Подключение роутеров
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
// Генерация ошибки в случае 404 и передача ее дальше
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening on port: ${server.address().port}`));