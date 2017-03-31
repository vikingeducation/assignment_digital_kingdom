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
  res.render('kingdoms', { kingdoms });
});

// router.get('/:kingdomName', (req, res) => {
//   const kingdomName = req.params.kingdomName;
//   let castles = getCastles(kingdomName);
//   res.render('individualKingdom', { kingdomName, castles });
// });

// router.get('/:kingdomName/:castleName', (req, res) => {
//   const kingdomName = req.params.kingdomName;
//   const castleName = req.params.castleName;
//   let lieges = getLieges(kingdomName, castleName);
//   res.render('castles', { kingdomName, castleName, lieges });
// });

router.get('/:kingdomName/:castleName/:liegeName', (req, res) => {
  const kingdomName = req.params.kingdomName;
  const castleName = req.params.castleName;
  const liegeName = req.params.liegeName;
  let vassals = getVassals(kingdomName, castleName, liegeName);

  res.render('lieges', { kingdomName, castleName, liegeName, vassals });
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

const getVassals = (kingdomName, castleName, liegeName) => {
  const json = getJson();
  let vassals = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          castle.lieges.forEach(liege => {
            if (liege.name == liegeName) {
              vassals = liege.vassals;
            }
          });
        }
      });
    }
  });
  console.log(vassals);
  return vassals;
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
