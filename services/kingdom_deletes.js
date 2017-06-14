const fs = require("fs");

const getJson = () => {
  const data = fs.readFileSync("./kingdom.json");
  const json = JSON.parse(data);
  return json;
};

const saveJson = json => {
  fs.writeFileSync("./kingdom.json", JSON.stringify(json, null, 2));
};

const deleteLiege = (kingdomName, castleName, liegeName) => {
  let json = getJson();

  delete json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName];

  saveJson(json);
};

const deleteCastle = (kingdomName, castleName) => {
  let json = getJson();

  delete json.kingdoms[kingdomName]["castles"][castleName];

  saveJson(json);
};

const deleteKingdom = (kingdomName) => {
  let json = getJson();

  delete json.kingdoms[kingdomName];

  saveJson(json);
};

const deleteVassal = (kingdomName, castleName, liegeName, vassalName) => {
  let json = getJson();

  const vassals = json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"]
  const newVassals = vassals.filter(vassal => vassal !== vassalName);

  json.kingdoms[kingdomName]["castles"][castleName]["lieges"][liegeName]["vassals"] = newVassals;

  saveJson(json);
};

module.exports = {
  deleteLiege,
  deleteCastle,
  deleteKingdom,
  deleteVassal
};