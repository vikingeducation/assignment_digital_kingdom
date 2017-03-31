const getKingdoms = () => {
  const data = fs.readFileSync("../data/kingdoms.json");
  const json = JSON.parse(data);
  const kingdomsArr = json.kingdoms.map((element) => {
    return element.name;
  });
  return kingdomsArr;
};


module.exports = {
	getKingdoms
};