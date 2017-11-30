const fs = require('fs');

let getJson = (jsonFile) => {
  let data = fs.readFileSync(`./data/${jsonFile}`)
  let json = JSON.parse(data);
  return json;
}

const getKingdoms = () => {
  return getJson('kingdoms.json');
}

const getQueens = () => {
  return getJson('queens.json');
}

const getKings= () => {
  return getJson('kings.json');
}

const getCastles= () => {
  return getJson('castles.json');
}

const getLieges = () => {
  return getJson('lieges.json');
}

const getVassals= () => {
  return getJson('vassals.json');
}




module.exports = {
  getKingdoms,
  getQueens,
  getKings,
  getCastles,
  getLieges,
  getVassals
};
