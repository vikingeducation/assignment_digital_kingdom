const fs = require("fs");

let getJSON = () => {
  let json = fs.readFileSync("./data/kingdoms/kingdoms.json");
  json = JSON.parse(json);
  return json;
};

let getKingdoms = () => {
  let kingdoms = getJSON();
  let kingdomNames = Object.keys(kingdoms);
  return kingdomNames;
};

let getKingdom = name => {
  let json = getJSON();
  let kingdom = json[name];
  return kingdom;
};

module.exports = {
  getKingdoms,
  getKingdom
};
