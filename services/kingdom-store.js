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
  const kingdoms = json.kingdoms;

  //check duplicates
  const duplicates = kingdoms.filter(kingdom => kingdom.name === name);
  if (duplicates.length > 0) return;

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
  const castles = getCastles(kingdomName);

  //check duplicates
  const duplicates = castles.filter(castle => castle.name === castleName);
  if (duplicates.length > 0) return;

  const newCastle = {
    name: castleName,
    lieges: []
  };
  
  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.push(newCastle);
    }
  });

  saveJson(json);
};

const removeCastle = (kingdomName, castleName) => {
  const json = getJson();

  const castles = getCastles(kingdomName); 
  const newCastles = castles.filter(castle => castle.name !== castleName);
  
  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles = newCastles;
    }
  });

  saveJson(json);
};

const getLieges = (kingdomName, castleName) => {
  const json = getJson();
  const lieges = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name === castleName) {
          lieges = castle.lieges;
        }
      });
    }
  });

  return lieges;
};

const addLiege = (kingdomName, castleName, liegeName) => {
  const json = getJson();
  const lieges = getLieges(kingdomName, castleName);

  //check duplicates
  const duplicates = lieges.filter(liege => liege.name === liegeName);
  if (duplicates.length > 0) return;

  const newLiege = {
    name: liegeName,
    url: "../images/blank.png",
    vassals: []
  };

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name === castleName) {
          castle.lieges.push(newLiege);
        }
      });
    }
  });

  saveJson(json);
};

const removeLiege = (kingdomName, castleName, liegeName) => {
  const json = getJson();

  const lieges = getLieges(kingdomName, castleName); 
  const newLieges = lieges.filter(liege => liege.name !== liegeName);

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name === castleName) {
          castle.lieges = newLieges;
        }
      });
    }
  });

  saveJson(json);
};

const getVassals = (kingdomName, castleName, liegeName) => {
  const json = getJson();
  let vassals = [];

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name === castleName) {
          castle.lieges.forEach(liege => {
            if (liege.name === liegeName) {
              vassals = liege.vassals;
            }
          });
        }
      });
    }
  });

  return vassals;
};

const addVassal = (kingdomName, castleName, liegeName, vassalName) => {
  const json = getJson();
  const vassals = getVassals(kingdomName, castleName, liegeName);

  //check duplicates
  const duplicates = vassals.includes(vassalName);
  if (duplicates) return;

  json.kingdoms.forEach(kingdom => {
    if (kingdom.name === kingdomName) {
      kingdom.castles.forEach(castle => {
        if (castle.name === castleName) {
          castle.lieges.forEach(liege => {
            if (liege.name === liegeName) {
              liege.vassals.push(vassalName);
            }
          });
        }
      });
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
  addCastle,
  removeCastle,
  getLieges,
  addLiege,
  removeLiege,
  getVassals,
  addVassal
};
