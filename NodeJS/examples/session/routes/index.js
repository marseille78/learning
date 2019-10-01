const router = require('express').Router();

const isAdmin = (req, res, next) => {
  // если в сессии текущего пользователя есть пометка о том, что он администратор
  if (req.session.isAdmin) {
    // то все хорошо
    return next();
  }

  // если нет, то перебросить пользователя на главную страницу сайта
  res.redirect('/');
};

const ctrlHome = require('../controllers/index');
const ctrlSecret = require('../controllers/secret');

router.get('/', ctrlHome.getHome);
router.post('/', ctrlHome.postHome);

router.get('/secret', isAdmin, ctrlSecret.getSecret);

module.exports = router;