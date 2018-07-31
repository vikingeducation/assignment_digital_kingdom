const fs = require('fs')

//this function gets the data/json from the various files
const getKingdomData = (fileName) => {
  const dataFromFileName = fs.readFileSync(`./data/${fileName}.json`)
  var json = JSON.parse(dataFromFileName)
  return json
}

//gets king queen and kingdom data then creates a new obect from them.
const getKingdom = () => {
  let queens = getKingdomData("queens")
  let kings = getKingdomData("kings")
  const json = getKingdomData("kingdoms")
  const kingdoms = Object.keys(json)
  var finalObj = {}
  var kingdomInfo = []

//loop though each kingdom
  for (let kingdom of kingdoms) {
    finalObj = {
      kingdomName: (json[kingdom].name),
      numCastles: (json[kingdom].castleIds),
      id: (json[kingdom].id)
    }
    //each index of the arry will be an object this sets up the object and inserts data from kingdom file.
    kingdomInfo.push(finalObj)
  }
  // adds king and queen info to the object (they were from diffrent files)
  for (let kingdom of kingdomInfo) {
    var key = kingdom.id
    kingdom.queen = queens[key].name
    kingdom.king = kings[key].name
  }
  return kingdomInfo
}

const addKingdoms = (kingdomName) => {
  // line 40 and 41 are to know how many kingdoms we have so that we can assign the correct id number
  let kingdomNum = getKingdom()
  let numKingdoms = kingdomNum.length
  numKingdoms++
  const json = getKingdomData(kingdoms)

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  json[numKingdoms] = {
    "id": numKingdoms,
    "name": kingdomName,
    "kingId": numKingdoms,
    "queenId": numKingdoms,
    "castleIds": [
      numKingdoms * 2 - 1,
      numKingdoms * 2
    ]
  }
  //save file
  fs.writeFileSync('./data/kingdoms.json', JSON.stringify(json, null, 4));
}
//well need to be able to get all the kings and queens seperatly so that we can assign ids later
const getKings = () => {
  const json = getKingdomData('kings')
  const kings = Object.keys(json)
  //console.log(kings)
  var kingsNames = []
  for (let king of kings) {
    kingsNames.push(json[king].name)
    //push entire object with id/name into arry
    //kingsNames.push(json[king].id)
  }
  return kingsNames
}

const getQueens = () => {
  const json = getKingdomData('queens')
  const queens = Object.keys(json)
  //console.log(queens)
  var queensNames = []
  for (let queen of queens) {
    queensNames.push(json[queen].name)
  }
  //console.log(queensNames)
  return queensNames
}

const addKings = (king) => {
  let kingNum = getKings()
  let numKings = kingNum.length
  numKings++
  const json = getKingdomData(kings)

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  json[numKings] = {
    "id": numKings,
    "name": king
  }
  //save file
  fs.writeFileSync('./data/kings.json', JSON.stringify(json, null, 4));
}

const addQueens = (queen) => {
  let queenNum = getQueens()
  let numQueens = queenNum.length
  numQueens++
  const json = getKingdomData(queens)

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  json[numQueens] = {
    "id": numQueens,
    "name": queen
  }
  //save file
  fs.writeFileSync('./data/queens.json', JSON.stringify(json, null, 4));
}

const getCastles = (kingdomId) => {
  const kingdoms = getKingdomData("kingdoms")
  let castleIds = kingdoms[kingdomId].castleIds

  const castleData = getKingdomData("castles")
  var castleNames = []
  var castleInfo = {}
  var finalObj = {}
  for (let id of castleIds) {

    finalObj = {
      name: castleData[id].name,
      liegeIds: castleData[id].liegeIds,
      id: castleData[id].id,
      kingdomName: kingdoms[kingdomId].name,
      kingdomId: kingdoms[kingdomId]
    }
    castleNames.push(finalObj)
  }
  return castleNames
}

const addCastles = (castleName, kingdomId) => {
  let castles = getKingdomData("castles")
  let castleKeys = Object.keys(castles)
  let numCastles = castleKeys.length
  numCastles++

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  castles[numCastles] = {
    "id": numCastles,
    "name": castleName,
    "liegeIds": [
      numCastles * 2 - 1,
      numCastles * 2
    ]
  }
  //this will associate the castle Ids to the appropriate kingdom.
  let kingdoms = getKingdomData("kingdoms")
  kingdoms[kingdomId].castleIds.push(numCastles)


  //save file
  fs.writeFileSync('./data/castles.json', JSON.stringify(castles, null, 4));
  fs.writeFileSync('./data/kingdoms.json', JSON.stringify(kingdoms, null, 4));
}

module.exports = {
  getKingdom,
  addKingdoms,
  getCastles,
  addKings,
  addQueens,
  addCastles
}
