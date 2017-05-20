const express = require('express');
const { 
  getVassals,
  addLiege,
  addVassal
} = require('../services/lieges-store');
const router = express.Router({mergeParams: true});


router.get('/:liege', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.params.liege;
  let allVassals = getVassals(kingdom, castle, liege);
  res.render("lieges/show", { kingdom, castle, liege, allVassals });
});

router.post('/', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.body.liege;
  addLiege(kingdom, castle, liege);
  res.redirect("back");
});

router.post('/:liege/vassals', (req, res) => {
  let kingdom = req.params.kingdom;
  let castle = req.params.castle;
  let liege = req.params.liege;
  let vassal = req.body.vassal;
  addVassal(kingdom, castle, liege, vassal);
  res.redirect("back");
});

module.exports = router;