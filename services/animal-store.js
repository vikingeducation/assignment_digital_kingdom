const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("animals.json");
  const json = JSON.parse(data);
  return json;
};

const getSpecies = () => {
  const json = getJson();
  const species = Object.keys(json.species);
  return species;
};

const addSpecies = name => {
  const json = getJson();
  if (json.species[name]) return;

  json.species[name] = [];

  saveJson(json);
};

const getAnimals = species => {
  const json = getJson();
  const animals = json.species[species];
  return animals;
};

const addAnimal = (species, name) => {
  const json = getJson();

  json.species[species].push(name);

  saveJson(json);
};

const releaseAnimal = (species, name) => {
  const json = getJson();

  const animals = json.species[species];
  const newAnimals = animals.filter(animal => animal !== name);

  json.species[species] = newAnimals;

  saveJson(json);
};

const saveJson = json => {
  fs.writeFileSync("animals.json", JSON.stringify(json, null, 4));
};

module.exports = {
  getSpecies,
  addSpecies,
  getAnimals,
  addAnimal,
  releaseAnimal,
};
