module.exports.getHome = (req, res) => {
  res.render('pages/index', {
    title: 'Home page'
  });
};