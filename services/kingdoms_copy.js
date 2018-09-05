const fs = require('fs')


const getKingdomData = () => {
  const kingdomData = fs.readFileSync('./data/kingdoms.json')
  var json = JSON.parse(kingdomData)
  return json
}

const getKingsData = () => {
  const kingData = fs.readFileSync('./data/kings.json')
  var json = JSON.parse(kingData)
  return json
}

const getQueensData = () => {
  const queenData = fs.readFileSync('./data/queens.json')
  var json = JSON.parse(queenData)
  return json
}
const getCastleData = () => {
  const castleData = fs.readFileSync('./data/castles.json')
  var json = JSON.parse(castleData)
  return json
}

const getKings = () => {
  const json = getKingsData()
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
  const json = getQueensData()
  const queens = Object.keys(json)
  //console.log(queens)
  var queensNames = []
  for (let queen of queens) {
    queensNames.push(json[queen].name)
  }
  //console.log(queensNames)
  return queensNames
}

const getKingdom = () => {
  let queens = getQueensData()
  let kings = getKingsData()

  const json = getKingdomData()
  const kingdoms = Object.keys(json)
  //console.log(kingdoms + "obj keys")

  var kingdomName = []
  var numCastles = []
  var finalObj = {}
  var kingdomInfo = []

  for (let kingdom of kingdoms) {
    finalObj = {
      kingdomName: (json[kingdom].name),
      numCastles: (json[kingdom].castleIds),
      id: (json[kingdom].id)
    }
    kingdomInfo.push(finalObj)
  }

  for (let kingdomSet of kingdomInfo) {
    var key = kingdomSet.id
    kingdomSet.queen = queens[key].name
    kingdomSet.king = kings[key].name
  }
  return kingdomInfo
}

const getCastlesNum = () => {
  const json = getKingdomData()
  const kingdoms = Object.keys(json)

}

const addKingdoms = (kingdomName) => {
  //read from animal.json file
  let kingdomNum = getKingdom()
  let numKingdoms = kingdomNum.length
  numKingdoms++
  const json = getKingdomData()

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

const addKings = (king) => {
  let kingNum = getKings()
  let numKings = kingNum.length
  numKings++
  const json = getKingsData()

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
  const json = getQueensData()

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
  const kingdoms = getKingdomData()
  let castleIds = kingdoms[kingdomId].castleIds

  const castleData = getCastleData()
  //var json = JSON.parse(castleData)
  //console.log(json)
  //ned to match id = key, need to pop out name that matches with array from  kingdoms.

  var castleNames = []
  var castleInfo = {}
  var finalObj = {}
  for (let id of castleIds) {
    //console.log(id)
  //  console.log(json[id])
    /*
    castleInfo.name = json[id].name
    castleInfo.liegeIds = json[id].liegeIds
    castleInfo.id = json[id].id
    */
    finalObj = {
      name: castleData[id].name,
      liegeIds: castleData[id].liegeIds,
      id: castleData[id].id
    }
    castleNames.push(finalObj)
  }
  //console.log(castleNames)
  /*
  const castles = Object.keys(json)
  for (kingdom of kingdoms) {

    kingdom.numCastles
  }

  //console.log(castles)

  var castleNames = []
  for (let castle of castles) {
    castleNames.push(json[castle].name)
  }
  */
  return castleNames
}

const addCastles = (castleName, kingdom) => {
  //need to know.. kingdom to add castle to
  // get key from kingdom.
  /*
  "2": {
    "id": 2,
    "name": "Camelot",
    "liegeIds": [
      3,
      4
    ]
  */
  let castles = getCastleData()
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
  let kingdoms =
  //save file
  fs.writeFileSync('./data/castles.json', JSON.stringify(castles, null, 4));

}

module.exports = {
  getKingdom,
  addKingdoms,
  getQueens,
  getKings,
  getCastles,
  addKings,
  addQueens,
  addCastles
}
