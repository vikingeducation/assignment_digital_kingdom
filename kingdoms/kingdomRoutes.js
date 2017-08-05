const express = require('express');
const router = express.Router();
const { getKingdoms, createKingdom } = require('./kingdomService'); 

router.get('/', (req, res) => {
  let kingdoms = getKingdoms();
  res.render('kingdoms/index', { kingdoms })
});

router.post('/', (req, res) => {
  let name = req.body.name
  createKingdom(name);
  res.redirect('/kingdoms');
});

module.exports = router;