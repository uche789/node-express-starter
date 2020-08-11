const appTempData = require('../json/data.json');

module.exports = (req, res, next) => {
  res.json(appTempData);
}