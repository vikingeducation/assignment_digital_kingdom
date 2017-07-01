const fs = require('fs');

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
};

const saveJson = (json) => {
  fs.writeFileSync("kingdoms.json", JSON.stringify(json, null, 4));
};

const getKingdoms = () => {
  const json = getJson();
  return json.kingdoms;
};

const getRulers = (kingdom) => {
  const json = getJson();
  let rulers = {};
  rulers.king = json.kingdoms[kingdom].king;
  rulers.queen = json.kingdoms[kingdom].queen;
  return rules;
};

//returns array of castles
const getCastles = (searchKingdom) => {
  //array of kingdom objects
  const json = getKingdoms();

  //filter array by kingdomName key in each object
  let selectedKingdom = (json.find( (kingdom) => {
    return kingdom.kingdomName === searchKingdom;
  }));

  return selectedKingdom.castles;
};

const getLieges = (searchKingdom, searchCastle) => {
  const allCastles = getCastles(searchKingdom);

  let selectedCastle = (allCastles.find( (castle) => {
    return castle.castleName === searchCastle;
  }));

  return selectedCastle.lieges;
};

const getVassals = (searchKingdom, searchCastle, searchLiege) => {
  const allLieges = getLieges(searchKingdom, searchCastle);

  let selectedLiege = (allLieges.find( (liege) => {
    return liege.liegeName === searchLiege;
  }));

  return selectedLiege.vassals;
};

const addKingdom = (name, king, queen) => {
  let json = getJson();

  json.kingdoms.push({
    "kingdomName": name,
    "king": king,
    "queen": queen,
    "castles": []
  });

  saveJson(json);
};

const addCastle = (kingdomName, castleName) => {
  let json = getJson();

  let newKingdoms = json.kingdoms.map( (kingdom) => {
    if (kingdom.kingdomName === kingdomName) {
      kingdom.castles.push({
        "castleName": castleName,
        "lieges": []
      });
      return kingdom;
    } else {
      return kingdom;
    }
  });

  json.kingdoms = newKingdoms;
  saveJson(json);
};

const addLiege = (kingdomName, castleName, liegeName) => {
  let json = getJson();

  let newKingdoms = json.kingdoms.map( (kingdom) => {
    if (kingdom.kingdomName === kingdomName) {
      kingdom.castles.map( (castle) => {
        if (castle.castleName === castleName) {
          castle.lieges.push({
            "liegeName": liegeName,
            "vassals": []
          });
          return castle;
        } else {
          return castle;
        }
      });
      return kingdom;
    } else {
      return kingdom;
    }
  });

  json.kingdoms = newKingdoms;
  saveJson(json);
};

const addVassal = (name) => {

};

module.exports = {
  getKingdoms,
  getRulers,
  getCastles,
  getLieges,
  getVassals,
  addKingdom,
  addCastle,
  addLiege,
  addVassal
};
