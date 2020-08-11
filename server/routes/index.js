module.exports = (router) => {
  router.get('/application', require('./application'));
  router.get('/verify', require('./verifier'));
};
