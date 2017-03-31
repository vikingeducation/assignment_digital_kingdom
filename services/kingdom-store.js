const fs = require("fs");

const _getData = () => {
  const data = fs.readFileSync("kingdoms.json");
  const obj = JSON.parse(data);
  return obj;
};

const _filterByName = (array, nameArg) => {
  let result = array.filter(obj => {
    return obj.name === nameArg;
  });
  return result[0];
};

const getKingdoms = () => {
  const obj = _getData();
  return obj.kingdoms;
};

const getKingdom = kingdomName => {
  const kingdoms = getKingdoms();
  const kingdom = _filterByName(kingdoms, kingdomName);
  return kingdom;
};

const getCastles = kingdomName => {
  const kingdom = getKingdom(kingdomName);
  return kingdom.castles;
};

const getLieges = (kingdomName, castleName) => {
  const castles = getCastles(kingdomName);
  const castle = _filterByName(castles, castleName);
  return castle.lieges;
};

const getVassals = (kingdomName, castleName, liegeName) => {
  const lieges = getLieges(kingdomName, castleName);
  const liege = _filterByName(lieges, liegeName);
  return liege.vassals;
};

module.exports = {
  getKingdoms,
  getCastles,
  getLieges,
  getVassals,
  getKingdom
};
