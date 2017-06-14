const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("./kingdom.json");
  const json = JSON.parse(data);
  return json;
};

const saveJson = json => {
  fs.writeFileSync("./kingdom.json", JSON.stringify(json, null, 2));
};

const addKingdom = (kingdomName, kingName, queenName) => {
  let json = getJson();

  //check for existing object
  if (json.kingdoms[kingdomName]) return;

  json.kingdoms[kingdomName] = {};
  json.kingdoms[kingdomName]["king"] = kingName;
  json.kingdoms[kingdomName]["queen"] = queenName;
  json.kingdoms[kingdomName]["castles"] = {};

  saveJson(json);
};

const addCastles = (kingdomName, castleName) => {
  const json = getJson();

  //check for existing object
  if (json.kingdoms[kingdomName]["castles"][castleName]) return;

  json.kingdoms[kingdomName]["castles"][castleName] = {};
  json.kingdoms[kingdomName]["castles"][castleName]["lieges"] = {};

  saveJson(json);
};

const addLiegies = (kingdomName, castleName, liegeName) => {
  const json = getJson();

  //check for existing object
  if (json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]) return;

  json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName] = {};
  json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"] = [];

  saveJson(json);
};

const addVassals = (kingdomName, castleName, liegeName, vassalName) => {
  const json = getJson();

  //check for existing object
  if (json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"][vassalName]) return;

  json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"].push(vassalName);

  saveJson(json);
};


module.exports = {
  addKingdom,
  addCastles,
  addLiegies,
  addVassals,
};