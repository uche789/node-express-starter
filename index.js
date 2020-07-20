const express = require('express');
const app = express();
const router = express.Router()
const PORT = process.env.PORT || 3000;

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function (req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello');
});

router.get('/verify', function (req, res, next) {
  const code = req.query['code'];
  if (code === 'abc' || code === '123') {
    res.status(200).send({ msg: 'Code is valid' });
  } else {
    res.status(404).json({ msg: 'Invalid code' });
  }
})

app.use(router);
app.listen(PORT);