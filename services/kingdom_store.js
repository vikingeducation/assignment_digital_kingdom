const fs = require("fs");
const kingdomsObject = Promise.resolve(require("../data/kingdoms.json"));
const kingsObject = Promise.resolve(require("../data/kings.json"));
const queensObject = Promise.resolve(require("../data/queens.json"));
const castlesObject = Promise.resolve(require("../data/castles.json"));
const liegesObject = Promise.resolve(require("../data/lieges.json"));
const vassalsObject = Promise.resolve(require("../data/vassals.json"));

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

const callArray = () => {
  //const kingdomsArray = kingdomsObject.map(val => val);
  //console.log(kingdomsArray);
  console.log(kingdomsObject);
};

/*const getKingdoms = () => {
  const kingdomNames = [];
  const kingdomKings = [];
  const kingdomQueens = [];
  const kingdoms = Object.keys(kingdomsObject);
  for (i = 0; i < kingdoms.length; i++) {
    kingdomNames[i] = kingdomsObject[kingdoms][name];
    kingdomKings[i] = kingdomsObject[kingdoms][kingId];
    kingdomQueens[i] = kingdomsOBject[kingdoms][queenId];
  });
  return kingdoms;
};*/

/*const getKingdoms = () => {
  const json = getJson().then(data => Object.keys(data));
  // const kingdoms = Object.keys(json);
  return json;
};*/

/*const getKingdomProps = () => {
  const json = getJson();
  const kingdomProps = json.
};*/

module.exports = { callArray };
