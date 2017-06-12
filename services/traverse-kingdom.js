const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("./kingdom.json");
  const json = JSON.parse(data);
  return json;
};

const saveJson = json => {
  fs.writeFileSync("./kingdom.json", JSON.stringify(json, null, 2));
};

const getKingdoms = () => {
    const json = getJson();

    const allKingdoms = json.kingdoms;
    return allKingdoms;
}



//get this info when specific kingdom is clicked
const getKingdomInfo = name => {
    const json = getJson();
    const info = json.kingdoms[name];
    return info;
} 

const addKingdom = (kingdomName, kingName, queenName) => {
  let json = getJson();
  json.kingdoms[kingdomName] = {};
  json.kingdoms[kingdomName]["king"] = kingName;
  json.kingdoms[kingdomName]["queen"] = queenName;
  json.kingdoms[kingdomName]["castles"] = {};

  saveJson(json);
}

const addCastles = (kingdomName, castleName) => {
  const json = getJson();
  json.kingdoms[kingdomName]["castles"][castleName] = {};

  saveJson(json);
}

const addLiegies = (kingdomName, castleName, LiegieName) => {
  const json = getJson();
  json.kingdoms[kingdomName][castleName][LiegieName].push(castleName);

  saveJson(json);
}

module.exports = {
  getKingdoms,
  getKingdomInfo,
  addKingdom
};