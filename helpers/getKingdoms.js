const fs = require("fs");

let getKingdoms = () => {
  let data = fs.readFileSync("../data/kingdoms/kingdoms.json");
  console.log(data);
  let something = JSON.parse(data);
  let names = Object.keys(something);
  console.log(something);

  // return the keys in an object
};

module.exports = getKingdoms;
