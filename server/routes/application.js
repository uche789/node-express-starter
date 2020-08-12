const appData = require('../services/application');

module.exports = (req, res, next) => {
  appData.fetch().then(data => {
    res.json(data);
  });
}