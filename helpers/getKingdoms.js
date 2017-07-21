const fs = require("fs");

let getKingdoms = () => {
  let data = fs.readFileSync("./data/kingdoms/kingdoms.json");
  let something = JSON.parse(data);
  let names = Object.keys(something);

  // return the keys in an object
  return names;
};

module.exports = getKingdoms;
