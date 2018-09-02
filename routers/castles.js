var express = require('express');
var router = express.Router();
const { saveCastle, getCastleShowInfo } = require('../services/castle-store');

router.get('/:name', (req, res) => {
  const castle = getCastleShowInfo(req.params.name);

  if (castle == 'Castle not found') {
    res.redirect('back');
  } else {
    res.render('castles/show', { castle: castle, castleKeyName: castle.name });
  }
});

router.post('/new', (req, res) => {
  const kingdomName = req.body.kingdom;
  const castleName = req.body.name;

  saveCastle(kingdomName, castleName);

  res.redirect('back');
});

module.exports = router;
