const express = require("express");
const {
  getSpecies,
  addSpecies,
  getAnimals,
  addAnimal,
  releaseAnimal,
} = require("../services/animal-store");

const router = express.Router();

router.get("/", (req, res) => {
  const allSpecies = getSpecies();
  res.render("animals", { allSpecies });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  addSpecies(name);
  res.redirect("back");
});

// get animals
router.get("/:species", (req, res) => {
  const species = req.params.species;
  console.log(species);
  const animals = getAnimals(species);
  console.log(animals);
  res.render("animals/show", { animals, species });
});

// add animal to a species
router.post("/:species", (req, res) => {
  const species = req.params.species;
  const name = req.body.name;
  addAnimal(species, name);
  res.redirect("back");
});

// remove animal from a species
router.post("/:species/animals/:animal/release", (req, res) => {
  const species = req.params.species;
  const animal = req.params.animal;
  releaseAnimal(species, animal);
  res.redirect("back");
});

module.exports = router;
