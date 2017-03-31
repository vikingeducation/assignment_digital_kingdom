const {
  _getData,
  _filterByName
} = require('./kingdomHelpers');

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
