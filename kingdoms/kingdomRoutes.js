const express = require('express');
const router = express.Router();
const { getKingdoms, createKingdom, getKingdom, createCastle, getCastle } = require('./kingdomService'); 

router.get('/', (req, res) => {
  let kingdoms = getKingdoms();
  res.render('kingdoms/index', { kingdoms });
});

router.post('/', (req, res) => {
  let name = req.body.name;
  createKingdom(name);
  res.redirect('/kingdoms');
});

router.get('/:name', (req, res) => {
  let name = req.params.name;
  let kingdom = getKingdom(name);
  let castles = kingdom.castles
  res.render('kingdoms/show', { kingdom, castles })
});

router.get('/:name/castles/:castleName', (req, res) => {
  let kingdomName = req.params.name;
  let castleName = req.params.castleName;
  let castle = getCastle(kingdomName, castleName);
  let lieges = castle.lieges
  res.render('castles/show', { castle, lieges })
});

router.post('/:name/castles', (req, res) => {
  let kingdomName = req.params.name;
  let castleName = req.body.name
  createCastle(kingdomName, castleName);
  res.redirect(`/kingdoms/${kingdomName}`);
});

module.exports = router;