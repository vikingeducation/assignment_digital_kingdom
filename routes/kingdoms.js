const express = require('express');
const router = express.Router();
const { getKingdoms, addKingdom } = require('../services/rf');

router.get('/', (req, res) => {
  const kingdoms = getKingdoms();
  res.render('kingdoms', { kingdoms });
});

router.post('/', (req, res) => {
  addKingdom(req.body.kingdomName, req.body.kingName, req.body.queenName);
  const kingdoms = getKingdoms();
  res.render('kingdoms', { kingdoms });
});

// // remove animal from a species
// router.post("/:species/animals/:animal/release", (req, res) => {
//   const species = req.params.species;
//   const animal = req.params.animal;
//   releaseAnimal(species, animal);
//   res.redirect("back");
// });

module.exports = router;
