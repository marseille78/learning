module.exports.getHome = (req, res, next) => {
  res.render('pages/index', {
    title: 'My session',
    views: req.session.views // Выводим значение из сессии
  });
};

module.exports.postHome = (req, res, next) => {
  req.session.isAdmin = true; // Установка сессионной переменной
  res.redirect('/secret');
};