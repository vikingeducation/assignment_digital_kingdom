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
  //var finalObj = {}
  var kingdomInfo = []

  //object.values
  //loop though each kingdom
  for (let kingdom of Object.values(json)) {
    kingdomInfo.push( {
      kingdomName: kingdom.name,
      numCastles: kingdom.castleIds,
      id: kingdom.id,
      queen: queens[kingdom.queenId].name,
      king: kings[kingdom.kingId].name
    })
    //each index of the arry will be an object this sets up the object and inserts data from kingdom file.
  }
  // adds king and queen info to the object (they were from diffrent files)
  return kingdomInfo
}

const addKingdoms = (kingdomName) => {
  // line 40 and 41 are to know how many kingdoms we have so that we can assign the correct id number
  let kingdomNum = getKingdom()
  let numKingdoms = kingdomNum.length
  numKingdoms++
  const json = getKingdomData("kingdoms")

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
/*
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
*/

const getRoyals = (royalType) => {
  const json = getKingdomData(royalType)
  const royals = Object.keys(json)
  console.log(royals) //keys shoudl be 1 2 3 4 5...
  var royalsNames = []
  for (let royal of royals) {
    royalsNames.push(json[royal].name)
  }
  //console.log(queensNames)
  return royalsNames
}

const addRoyals = (nameToAdd, royalType) => {
  let existingRoyalNames = getRoyals(royalType)
  let numOfRoyals = existingRoyalNames.length
  numOfRoyals++
  //fix royalType.. might put in king but should be plural because of file name.
  const json = getKingdomData(royalType)

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  json[numOfRoyals] = {
    "id": numOfRoyals,
    "name": nameToAdd
  }
  //save file
  fs.writeFileSync(`./data/${royalType}.json`, JSON.stringify(json, null, 4));
}

/*
const addKings = (king) => {
  let kingNum = getKings()
  let numKings = kingNum.length
  numKings++
  const json = getKingdomData("kings")

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
  const json = getKingdomData("queens")

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

*/



const getCastle = (kingdomId) => {
  const kingdoms = getKingdomData("kingdoms")
  let castleIds = kingdoms[kingdomId].castleIds

  const castleData = getKingdomData("castles")
  var castleNames = []
  var castleInfo = {}
  //var finalObj = {}
  for (let id of castleIds) {
    castleInfo = {
      name: castleData[id].name,
      liegeIds: castleData[id].liegeIds,
      id: castleData[id].id,
      kingdomName: kingdoms[kingdomId].name,
      kingdomId: kingdoms[kingdomId]
    }
    castleNames.push(castleInfo)
  }
  return castleNames
}

const addCastle = (castleName, kingdomId) => {
  let castles = getKingdomData("castles")
  //let castleKeys =
  let numOfCastles = Object.keys(castles).length + 1
  //numCastles++

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  castles[numOfCastles] = {
    "id": numOfCastles,
    "name": castleName,
    "liegeIds": [
      numOfCastles * 2 - 1,
      numOfCastles * 2
    ]
  }
  //this will associate the castle Ids to the appropriate kingdom.
  let kingdoms = getKingdomData("kingdoms")
  kingdoms[kingdomId].castleIds.push(numOfCastles)

  fs.writeFile('./data/castles.json', JSON.stringify(castles, null, 4));
  fs.writeFile('./data/kingdoms.json', JSON.stringify(kingdoms, null, 4));
}

const getLieges = castleId) => {
  //need kingdom Id soo just Id number then need liege ids
  //getkingdom data will get data from any of the json files.
  //get kingdom should get json file data.
  const castles = getKingdomData("castles") //change
  //let castleIds = kingdoms[kingdomId].castleIds
  let leigeIds = castles[castleId].liegeIds
  //this should get the array with all the liegeIds

  const liegeData = getKingdomData("lieges")// this is file of lieges in json form.
  // so now we need to use the liege ide's we go from castes to get the info from the leige json file.
  var liegeNames = []
  var castleInfo = {}
  var finalObj = {}
  for (let id of liegeIds) {

    finalObj = {
      name: liegeData[id].name,
      vassalIds: liegeData[id].vassalIds,
      id: liegeData[id].id,
      //kingdomName: kingdoms[kingdomId].name,
      //kingdomId: kingdoms[kingdomId]
    }
    castleNames.push(finalObj)
  }
  return castleNames
}

const addLieges = (liegeName, castleId) => {
  let lieges = getKingdomData("lieges")
  //let castleKeys =
  let numOfLieges = Object.keys(lieges).length
  numOfLieges++

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  lieges[numLieges] = {
    "id": numOfLieges,
    "name": liegeName,
    "vassalIds": [
      numOfLieges * 2 - 1,
      numOfLieges * 2
    ]
  }
  //this will associate the castle Ids to the appropriate kingdom.
  let castles = getKingdomData("castles")
  castles[castleId].liegeIds.push(numOfLieges)


  //save file
  //change both to wr
  fs.writeFile('./data/castles.json', JSON.stringify(castles, null, 4));
  fs.writeFile('./data/lieges.json', JSON.stringify(lieges, null, 4));
}

const getVassals = (liegeId) => {
  const lieges = getKingdomData("lieges")
  let vassalIds = lieges[liegeId].vassalIds

  const vassalData = getKingdomData("vassals")
  var vassalNames = []
  var vassalInfo = {}
  var finalObj = {}
  for (let id of vassalIds) {

    finalObj = {
      name: vassalData[id].name,
      //liegeIds: castleData[id].liegeIds,
      id: vassalData[id].id
      //kingdomName: kingdoms[kingdomId].name,
      //kingdomId: kingdoms[kingdomId]
    }
    vassalNames.push(finalObj)
  }
  return vassalNames
}

const addVassals = (castleName, kingdomId) => {
  let castles = getKingdomData("castles")
  //let castleKeys =
  let numCastles = Object.keys(castles).length + 1
  //numCastles++

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
  //change both to wr
  fs.writeFile('./data/castles.json', JSON.stringify(castles, null, 4));
  fs.writeFile('./data/kingdoms.json', JSON.stringify(kingdoms, null, 4));
}



module.exports = {
  getKingdom,
  addKingdoms,
  getCastle,
  addRoyals,
  addCastle,
  getRoyals
}
