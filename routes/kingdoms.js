const express = require('express');
const router = express.Router();
const { getKingdoms, addKingdom } = require('../services/rf');

router.get('/', (req, res) => {
  const kingdoms = getKingdoms();
  res.render('kingdoms', { kingdoms });
});


// add animal to a species
router.post("/", (req, res) => {
  console.log('req from POST ', req)
  // const species = req.params.species;
  // const name = req.body.name;
  // addAnimal(species, name);
  // res.redirect("back");
});

// // remove animal from a species
// router.post("/:species/animals/:animal/release", (req, res) => {
//   const species = req.params.species;
//   const animal = req.params.animal;
//   releaseAnimal(species, animal);
//   res.redirect("back");
// });

module.exports = router;
