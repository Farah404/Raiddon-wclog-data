const router = require('express').Router();

router.get('/', (req, res) => {
  res.render("index.html");
});

module.exports = router;
