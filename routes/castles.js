const express = require('express');
const { 
  getLieges,
  addCastle,
} = require('../services/castle-store');
const lieges = require('./lieges');
const router = express.Router({mergeParams: true});

router.get('/:castle', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let allLieges = getLieges(kingdom, castle);
  res.render("castles/show", { kingdom, castle, allLieges });
});

router.post('/', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.body.castle;
  addCastle(kingdom, castle);
  res.redirect("back");
});

router.use('/:castle/lieges', lieges);

module.exports = router;