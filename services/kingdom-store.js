const fs = require("fs");

const getData = () => {
  const data = fs.readFileSync("kingdoms.json");
  const obj = JSON.parse(data);
  return obj;
};

const getKingdoms = () => {
  const obj = getData();
  return obj.kingdoms;
};

const getCastles = () => {
  const kingdoms = getKingdoms();
  return kingdoms.castles;
};

const getLieges = () => {
  const castles = getCastles();
  return castles.lieges;
};

const getVassals = () => {
  const lieges = getLieges();
  return lieges.vassals;
};

module.exports = { getKingdoms, getCastles, getLieges, getVassals };
