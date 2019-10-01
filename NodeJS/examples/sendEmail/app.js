const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, './views/'));
app.set('view engine', 'pug');

// body-parser подключаем для всех запросов
app.use(bodyParser.json());
// extended: false - передаются простые данные (~ строки)
// extended: true - передаются сложные данные (~ массивы)
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, './public/')));

app.use('/', require('./routes/index'));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {message: err.message, error: err});
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port: ${server.address().port}`);
});