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
};

//returns all castles in a selected kingdom
const getCastles = (kingdom) => {
  const json = getJson();

  return json.kingdoms[kingdom]["castles"]
};

const getLieges = (kingdomName, castle) => {
  const json = getJson();

  return json.kingdoms[kingdomName]["castles"][castle]["lieges"];
};

const getVassals = (kingdomName, castleName, liegeName) => {
  const json = getJson();

  return json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"];

};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
};