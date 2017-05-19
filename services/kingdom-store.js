const fs = require('fs');

const _getJSON = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json.Kingdoms;
};

const getKingdoms = () => {
  const json = _getJSON();
  // const kingdoms = Object.keys(json.Kingdoms);
  let result = {};

  return json;
};

const getCastles = (kingdom) => {
  const json = _getJSON()[kingdom]["Castles"];
  let result = {};

  return json;
  // for (let castle in json) {
  //   result[castle] = {};
  //   result[castle]["Name"] = castle;
  //   result[castle]["Lieges"] = Object.keys(json[castle]["Lieges"]);
  //   result[castle]["LiegeCount"] = json[castle]["LiegeCount"];
  // }

  // return result;
};

module.exports = {
  getKingdoms,
  getCastles
};