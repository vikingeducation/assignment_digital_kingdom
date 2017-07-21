
const fs = require('fs');
const path = require('path');
//get data
  //readFileSync
//add data
  //readFileSync
//save data  //dont export
  //readFileSync
//delete data
  //readFileSync

const getJsonData = () => {
  let data = fs.readFileSync(path.resolve(__dirname, "kingdoms.json"));
  console.log(data.toString());
  //  = fs.readFileSync("kingdoms.json");
  return data.toString();
}

// Just kingdom names (no children info)
const getKingdoms = () => JSON.parse(getJsonData()).kingdoms.map(ele => ele.name);



module.exports = {getKingdoms}
