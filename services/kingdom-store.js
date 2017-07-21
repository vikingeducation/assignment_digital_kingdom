const fs = require("fs");
const path = require("path");
//get data
//readFileSync
//add data
//readFileSync
//save data  //dont export
//readFileSync
//delete data
//readFileSync

const getJsonData = () => {
  let data = fs.readFileSync(path.resolve(__dirname, "../kingdoms.json"));
  console.log(data.toString());
  return data.toString();
};

// Just kingdom names (no children info)
const getKingdoms = () =>
  JSON.parse(getJsonData()).kingdoms.map(ele => ele.name);

const getCastles = () =>
  JSON.parse(getJsonData()).kingdoms.map(ele =>
    ele.castles.map(ele => ele.name)
  );

module.exports = { getKingdoms, getCastles };
