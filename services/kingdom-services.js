const fs = require('fs');
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



module.exports = {
	getKingdoms,
  getKingdomInfo,
  getKingdomCastles
};
