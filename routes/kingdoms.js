const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render("kingdoms", {});
});

router.get('/:name', (req, res) => {
  res.render("kingdoms/show", {});
});


module.exports = router;
