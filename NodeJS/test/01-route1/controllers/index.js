module.exports.getHome = (req, res) => {
  res.render('pages/index', {title: 'Home page'});
};

module.exports.postHome = (req, res) => {
  res.json({title: 'Home page'});
};