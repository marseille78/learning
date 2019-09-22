const express = require('express');
const app = express();

app.all('/', (req, res, next) => {
  console.log('Я выполнюсь для любого запроса и передам запрос дальше по очереди...');
  next(); // Передать следующему обработчику
});

app.get('/', (req, res) => {
  res.send('Отправил данные');
});

app.get('/:id', (req, res) => {
  let id = req.params.id;
  res.send('Отправил данные с параметра: ' + id);
});

app.post('/', (req, res) => {
  res.send('Получил POST запрос');
});

app.put('/', (req, res) => {
  res.send('Получил PUT запрос');
});

app.patch('/', (rea, res) => {
  res.send('Получил PATCH запрос');
});

app.delete('/', (req, res) => {
  res.send('Получил DELETE запрос');
});

app.listen(3000, () => console.log('Listening...'));