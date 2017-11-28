const fs = require('fs');

const getKingdoms = () => {
  const data = fs.readFileSync('./data/kingdoms.json')
  const json = JSON.parse(data);
  return json;
}


module.exports = {
  getKingdoms
}
