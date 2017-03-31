const fs = require('fs');

const getKingdoms = () => {
  const json = _getJSON();
  const kingdomsArr = json.kingdoms.map((element) => {
    return element.name;
  });
  return kingdomsArr;
};

const getKingdomInfo = (kingdomName) => {
  const json = _getJSON();
  let kingdomInfo = _selectKingdom(json, kingdomName);
  kingdomInfo.numCastles = kingdomInfo.castles.length;
  console.log(kingdomInfo);
  return kingdomInfo;
};

const getKingdomCastles = (kingdomName) => {
  const json = _getJSON();
  let kingdomInfo = _selectKingdom(json, kingdomName);
  // get Array of Castles
  //console.log(kingdomInfo);
  // return kingdomInfo;
};

const _getJSON = () => {
  const data = fs.readFileSync("./kingdoms.json");
  return JSON.parse(data);
};

const _selectKingdom = (json, kingdomName) => {
  return json.kingdoms.find((kingdom) => {
    return kingdom.name === kingdomName;
  });
};


module.exports = {
	getKingdoms,
  getKingdomInfo
};
