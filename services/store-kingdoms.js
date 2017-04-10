const lands = require('../lib/kingdoms.json');
const fs = require('fs');

const getJson = (filename) => {
  const data = fs.readFileSync(filename);
  const json = JSON.parse(data);
  return json;
};

const addKingdom = (newKingdom, filename) => {
  const json = getJson(filename);
  if(!json.kingdoms[newKingdom.name]){
    var deepKingdom = {
      name: newKingdom.name,
      king: {
        name: newKingdom.kingName,
        age: newKingdom.kingAge,
      },
      queen: {
        name: newKingdom.queenName,
        age: newKingdom.queenAge,
      },
      castles: []
    };
    json.kingdoms.push(deepKingdom)
  }
  return json
}

// kingdom.name == Tomlandia
// postData.kingdom
// postData = { name: 'castle black',
//   kingdom: 'Tomlandia',
//   location: 'the wall' }


const addCastle = (postData, filename) => {
  const json = getJson(filename);
  json.kingdoms.forEach((kingdom) => {
    if(kingdom.name === postData.kingdom){
      kingdom.castles.push({
        name: postData.name,
        location: postData.location,
        lieges: []
      })
    }
  })
  return json
}

const saveJson = (json, filename) => {
  fs.writeFileSync(filename, JSON.stringify(json, null, 4));
};

///////Page Display

const displayBasicInfo = () => {
  var kingdoms = {};
  lands.kingdoms.forEach((kingdom) => {
    kingdoms[kingdom.name] = {
      name: kingdom.name,
      king: kingdom.king,
      queen: kingdom.queen,
      castleCount: kingdom.castles.length,
    }
  })
  return kingdoms
}

const displayCastleInfo = (kingdomName) => {
  var castles = {};
  lands.kingdoms.forEach((kingdom) => {
      if (kingdomName === kingdom.name) {
        kingdom.castles.forEach((castle) => {
          castles[castle.name] = {
            name: castle.name,
            location: castle.location,
            liegeCount: castle.lieges.length
          }
        })
      }
    })
    return castles
  }


module.exports = {
  displayBasicInfo,
  addKingdom,
  displayCastleInfo,
  saveJson,
  addCastle,
}


