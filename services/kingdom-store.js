const fs = require("fs");
const path = require("path");
const url = require("url");
//get data
//readFileSync
//add data
//readFileSync
//save data  //dont export
//readFileSync
//delete data
//readFileSync

const getJsonData = () => fs.readFileSync(path.resolve(__dirname, "../kingdoms.json"), 'utf8')


const getKingdoms = () => JSON.parse(getJsonData()).kingdoms;

const getKingdom = (kingdom) => {
  return getKingdoms().find(ele => ele.name === kingdomName)
};

const getCastles = (kingdomName) => {
  return getKingdom(kingdomName).castles;
};

const getCastle = (kingdomName, castleName) => {
  return getCastles(kingdomName).find(ele => ele.name === castleName)
}

const getLieges = (kingdomName, castleName) => {
  return getCastle(kingdomName, castleName).lieges;
};

const getLiege = (kingdomName, castleName, liegeName) => {
  return getCastle(kingdomName, castleName).find(ele => ele.name === liegeName)
}

const getVassals = (kingdomName, castleName, liegeName) => {
  return getLiege(kingdomName, castleName, liegeName).vassals;
}


const getResource(kingdomName, castleName, liegeName) {
  const resources = [];
  resources.push(getKingdom(kingdomName));

  if(castleName) resources.push(get)
}

// const getResource = (req) => {
//   let pathname = url.parse(req.url).pathname;
//   let resourceArray = pathname.split('/');
//   let data = getKingdoms();
//
//   for(let i = 0; i < resourceArray.length; i++) {
//     for(let j = 0; j < )
//       data = data[resourceArray[i]];
//     })
//   }

module.exports = {
  getKingdoms,
  getKingdom,

};
