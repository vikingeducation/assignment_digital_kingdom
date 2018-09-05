const fs = require('fs')

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
  //const kingdoms = Object.keys(json)
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
  let existingKingdoms = getKingdom()
  let numOfKingdoms = existingKingdoms.length
  numOfKingdoms++
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
  fs.writeFileSync('./data/kingdoms.json', JSON.stringify(json, null, 4));
}

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

const getLieges = (castleId) => {
  const castles = getKingdomData("castles")
  let liegeIds = castles[castleId].liegeIds

  const liegeData = getKingdomData("lieges")
  var liegeNames = []
  var liegeInfo = {}
  //var finalObj = {}
  for (let id of liegeIds) {
    liegeInfo = {
      name: liegeData[id].name,
      vassalIds: liegeData[id].vassalIds,
      id: liegeData[id].id,
      castleName: castles[castleId].name,
      castleId: castles[castleId]
    }
    liegeNames.push(liegeInfo)
  }
  return liegeNames
}

const addLiege = (liegeName, castleId) => {
  let lieges = getKingdomData("lieges")
  //let castleKeys =
  let numOfLieges = Object.keys(lieges).length
  numCastles++

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  lieges[numOfLieges] = {
    "id": numOfLieges,
    "name": LiegeName,
    "vassalIds": [
      numOfLieges * 2 - 1,
      numOfLieges * 2
    ]
  }
  //this will associate the liege Ids to the appropriate castels.
  let castles = getKingdomData("castles")
  castles[castleId].liegeIds.push(numOfLieges)

  fs.writeFile('./data/lieges.json', JSON.stringify(lieges, null, 4));
  fs.writeFile('./data/castles.json', JSON.stringify(castles, null, 4));
}

const getVassals = (liegeId) => {
  const lieges = getKingdomData("lieges")

  let vassalIds = lieges[liegeId].vassalIds

  const vassalData = getKingdomData("vassals")
  var vassalNames = []
  var vassalInfo = {}
  //var finalObj = {}
  for (let id of vassalIds) {
    vassalInfo = {
      name: vassalData[id].name,
      //vassalIds: liegeData[id].vassalIds,
      id: vassalData[id].id,
      liegeName: lieges[liegeId].name,
      liegeId: lieges[liegeId].id
    }
    vassalNames.push(vassalInfo)
  }
  console.log(vassalNames)
  return vassalNames
}

const addVassals = (vassalName, liegeId) => {
  let vassals = getKingdomData("vassals")
  //let castleKeys =
  let numOfVassals = Object.keys(vassals).length
  numCastles++

  //if (json[numKingdoms][name]) {
  //  return
  //guess could do [] || json[kingdomName]
  //}
  // need guard clause
  vassals[numOfVassals] = {
    "id": numOfVassals,
    "name": VassalName,
  }
  //this will associate the liege Ids to the appropriate castels.
  let lieges = getKingdomData("lieges")
  lieges[liegeId].vassalIds.push(numOfLieges)

  fs.writeFile('./data/lieges.json', JSON.stringify(lieges, null, 4));
  fs.writeFile('./data/vassals.json', JSON.stringify(castles, null, 4));
}



module.exports = {
  getKingdom,
  addKingdoms,
  getRoyals,
  addRoyals,
  getCastle,
  addCastle,
  getLieges,
  addLiege,
  getVassals,
  addVassals
}
