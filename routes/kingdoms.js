const express = require('express');
const fs = require('fs');
// const {
//   getSpecies,
//   addSpecies,
//   getAnimals,
//   addAnimal,
//   releaseAnimal,
// } = require("../services/animal-store");

const router = express.Router();

router.get('/', (req, res) => {
  const kingdoms = getKingdoms();

  //console.log(allKingdoms);
  res.render('kingdoms', { kingdoms });
});

router.get('/:kingdomName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  console.log('kingdomName ' + kingdomName)
  let castles = getCastles(kingdomName);

  res.render('individualKingdom', { kingdomName, castles });
});

router.get('/:kingdomName/:castle', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castle = req.params.castle;
  let lieges = getLieges(kingdomName, castle);

  res.render('castles', { castle, lieges });
});

const getJson = () => {
  const data = fs.readFileSync('kingdoms.json');
  const json = JSON.parse(data);
  return json;
};

const getKingdoms = () => {
  const json = getJson();
  //console.log(json.kingdoms[0].name);
  const kingdoms = json.kingdoms;
  console.log(kingdoms);
  return kingdoms;
};

const getCastles = kingdomName => {
  const json = getJson();
  let castles = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      castles = kingdom.castles;
    }
  });

  return castles;
};

const getLieges = (kingdomName, castleName) => {
  const json = getJson();

  let lieges = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          lieges = castle.lieges;
        }
      });
    }
  });

  return lieges;
};

// router.post("/", (req, res) => {
//   const name = req.body.name;
//   addSpecies(name);
//   res.redirect("back");
// });

// // get animals
// router.get("/:species", (req, res) => {
//   const species = req.params.species;
//   console.log(species);
//   const animals = getAnimals(species);
//   console.log(animals);
//   res.render("animals/show", { animals, species });
// });
//
// // add animal to a species
// router.post("/:species", (req, res) => {
//   const species = req.params.species;
//   const name = req.body.name;
//   addAnimal(species, name);
//   res.redirect("back");
// });
//
// // remove animal from a species
// router.post("/:species/animals/:animal/release", (req, res) => {
//   const species = req.params.species;
//   const animal = req.params.animal;
//   releaseAnimal(species, animal);
//   res.redirect("back");
// });

module.exports = router;
