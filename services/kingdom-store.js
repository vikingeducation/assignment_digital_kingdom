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
  const newKingdom = {
    name: name,
    king: king,
    queen: queen,
    url: "../images/blank.png",
    castles: []
  };
  
  json.kingdoms.push(newKingdom);
  saveJson(json);
};

const removeKingdom = (name) => {
  const json = getJson();
  const kingdoms = json.kingdoms;
  json.kingdoms = kingdoms.filter(kingdom => kingdom.name !== name);
  saveJson(json);
};

const getCastles = kingdomName => {
  return getJson().kingdoms
    .filter(kingdom => kingdom.name === kingdomName)[0].castles;
};

const addCastle = (kingdomName, castleName) => {
  const json = getJson();
  const newCastle = {
    name: castleName,
    lieges: []
  };
  
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
  removeKingdom,
  getCastles,
  addCastle
};
