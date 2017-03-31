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

const saveJson = json => {
  fs.writeFileSync('kingdoms.json', JSON.stringify(json, null, 4));
};

const addKingdom = (kingdomName, kingName, queenName) => {
  const json = getJson();
  if (json.kingdoms[kingdomName]) return;
  let newKingdom = {};
  newKingdom.name = kingdomName;
  newKingdom.king = kingdomName;
  newKingdom.queen = queenName;
  newKingdom.castles = [];
  json.kingdoms.push(newKingdom);

  saveJson(json);
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

const addLiege = (kingdomName, castleName, liegeName) => {
  const json = getJson();
  let newLiege = {};
  newLiege.name = liegeName;
  newLiege.vassals = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          castle.lieges.push(newLiege);
        }
      });
    }
  });

  saveJson(json);
};

const addVassal = (kingdomName, castleName, liegeName, vassalName) => {
  const json = getJson();

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name == kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name == castleName) {
          castle.lieges.forEach(liege => {
            if (liege.name == liegeName) {
              liege.vassals.push(vassalName);
            }
          });
        }
      });
    }
  });

  saveJson(json);
};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  addKingdom,
  addCastle,
  addLiege,
  addVassal
};
