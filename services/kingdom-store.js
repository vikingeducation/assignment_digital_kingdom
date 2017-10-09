const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const getKingdoms = () => {
  const json = getJson();
  const kingdoms = json.kingdoms;
  return kingdoms;
};

const addKingdom = (name, king, queen) => {
  const json = getJson();
  if (json.kingdoms[name]) return;
  let newKingdom = {};
  newKingdom.name = name;
  newKingdom.king = king;
  newKingdom.queen = queen;
  newKingdom.url = "../images/blank.png";
  newKingdom.castles = [];
  json.kingdoms.push(newKingdom);

  saveJson(json);
};

// const getAnimals = species => {
//   const json = getJson();
//   const animals = json.species[species];
//   return animals;
// };

// const addAnimal = (species, name) => {
//   const json = getJson();

//   json.species[species].push(name);

//   saveJson(json);
// };

// const releaseAnimal = (species, name) => {
//   const json = getJson();

//   const animals = json.species[species];
//   const newAnimals = animals.filter(animal => animal !== name);

//   json.species[species] = newAnimals;

//   saveJson(json);
// };

const saveJson = json => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

module.exports = {
  getKingdoms,
  addKingdom
  // getAnimals,
  // addAnimal,
  // releaseAnimal,
};
