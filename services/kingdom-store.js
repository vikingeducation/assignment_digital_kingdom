const fs = require('fs');

const getJson = () => {
  const data = fs.readFileSync("kingdoms.json");
  const json = JSON.parse(data);
  return json;
}

const getKingdoms = () => {
  const json = getJson();
  const kingdoms = Object.keys(json.kingdoms);
  return kingdoms;
};

module.exports = {
  getKingdoms
};
