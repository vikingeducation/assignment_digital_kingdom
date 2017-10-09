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

const addCastle = (kingdomName, castleName) => {
  const json = getJson();
  let newCastle = {};
  newCastle.name = castleName;
  newCastle.lieges = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.push(newCastle);
    }
  });

  saveJson(json);
};


const saveJson = json => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

module.exports = {
  getKingdoms,
  addKingdom,
  getCastles,
  addCastle
};
