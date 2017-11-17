const fs = require("fs");
const kingdomsObject = require("../data/kingdoms.json");
const kingsObject = require("../data/kings.json");
const queensObject = require("../data/queens.json");
const castlesObject = require("../data/castles.json");
const liegesObject = require("../data/lieges.json");
const vassalsObject = require("../data/vassals.json");

/*const getJson = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/kingdoms.json', 'utf8', (err, data) => {
      err ? reject(err) : resolve(data);
    });
  }).then(data => {
    const json = JSON.parse(data);
    return json;
  });
};*/

const getKingdoms = () => {
  const kingdoms = Object.keys(kingdomsObject);
  return kingdoms;
};

/*const getKingdoms = () => {
  const json = getJson().then(data => Object.keys(data));
  // const kingdoms = Object.keys(json);
  return json;
};*/

/*const getKingdomProps = () => {
  const json = getJson();
  const kingdomProps = json.
};*/

module.exports = { getKingdoms };
