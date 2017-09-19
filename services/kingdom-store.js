const fs = require("fs");
const path = require("path");

const getJsonData = () =>
  fs.readFileSync(path.resolve(__dirname, "../kingdoms.json"), "utf8");

const getKingdoms = () => JSON.parse(getJsonData()).kingdoms;

const getKingdom = kingdomName => {
  return getKingdoms().find(ele => ele.name === kingdomName);
};

const getCastles = kingdomName => {
  return getKingdom(kingdomName).castles;
};

const getCastle = (kingdomName, castleName) => {
  if (castleName)
    return getCastles(kingdomName).find(ele => ele.name === castleName);
};

const getLieges = (kingdomName, castleName) => {
  if (castleName) return getCastle(kingdomName, castleName).lieges;
};

const getLiege = (kingdomName, castleName, liegeName) => {
  if (liegeName)
    return getLieges(kingdomName, castleName).find(
      ele => ele.name === liegeName
    );
};

const getVassals = (kingdomName, castleName, liegeName) => {
  if (liegeName) return getLiege(kingdomName, castleName, liegeName).vassals;
};

const getResources = req => {
  var kingdom = req.params.kingdom;
  var castle = req.params.castle;
  var liege = req.params.liege;
  return (resources = {
    kingdom: getKingdom(kingdom),
    castle: getCastle(kingdom, castle),
    liege: getLiege(kingdom, castle, liege)
  });
};

module.exports = {
  getResources,
  getKingdoms
};
