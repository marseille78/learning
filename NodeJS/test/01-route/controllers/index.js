module.exports.getIndex = (req, res) => {
  res.render('pages/index', {title: 'Main'});
};

module.exports.postIndex = (req, res) => {
  res.json({title: 'Main'});
};