const express = require('express');
const {
  getKingdoms
} = require('../services/kingdom-store');

const router = express.Router();

router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render("kingdoms", { allKingdoms });
  // res.send(JSON.stringify(getKingdoms(), null, 4));
});

module.exports = router;
