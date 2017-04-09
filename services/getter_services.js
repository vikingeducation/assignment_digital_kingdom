const {
  _getJSON,
  _getArrayOfNames,
  _getObjectByName
} = require('./helpers');


const getKingdoms = () => {
  const json = _getJSON();
  const kingdomsArr = _getArrayOfNames(json.kingdoms);
  return kingdomsArr;
};

const getKingdomInfo = (kingdomName) => {
  const json = _getJSON();
  let kingdomInfo = _getObjectByName(json.kingdoms, kingdomName);
  kingdomInfo.numCastles = kingdomInfo.castles.length;
  return kingdomInfo;
};

const getKingdomCastles = (kingdomName) => {
  const json = _getJSON();
  let kingdomInfo = _getObjectByName(json.kingdoms, kingdomName);
  const castlesArr = _getArrayOfNames(kingdomInfo.castles);
  return castlesArr;
};

const getCastleInfo = (kingdomName, castleName) => {
  const json = _getJSON();
  let kingdomInfo = _getObjectByName(json.kingdoms, kingdomName);
  let castleInfo = _getObjectByName(kingdomInfo.castles, castleName);
  castleInfo.lieges = _getArrayOfNames(castleInfo.lieges);
  return castleInfo;
};

const getLiegeInfo = (kingdomName, castleName, liegeName) => {
  const json = _getJSON();
  let kingdomInfo = _getObjectByName(json.kingdoms, kingdomName);
  let castleInfo = _getObjectByName(kingdomInfo.castles, castleName);
  let liegeInfo = _getObjectByName(castleInfo.lieges, liegeName);
  return liegeInfo;
};

module.exports = {
	getKingdoms,
  getKingdomInfo,
  getKingdomCastles,
  getCastleInfo,
  getLiegeInfo
};
