const fs = require('fs');

const getJson = () => {
  const data = fs.readFileSync('kingdoms.json');
  const json = JSON.parse(data);
  return json;
};

const getKingdoms = () => {
  const json = getJson();
  //console.log(json.kingdoms[0].name);
  const kingdoms = json.kingdoms;
  return kingdoms;
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

const getLieges = (kingdomName, castleName) => {
  const json = getJson();
  let lieges = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          lieges = castle.lieges;
        }
      });
    }
  });
  return lieges;
};

const getVassals = (kingdomName, castleName, liegeName) => {
  const json = getJson();
  let vassals = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          castle.lieges.forEach(liege => {
            if (liege.name == liegeName) {
              vassals = liege.vassals;
            }
          });
        }
      });
    }
  });
  console.log(vassals);
  return vassals;
};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals
};
