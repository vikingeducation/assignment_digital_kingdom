const KINGDOMS = require('./kingdoms');
const FS = require('fs');

const CASTLES = {};

CASTLES.getCastles = function(){
  return FS.readFileSync('./data/castles.json', 'utf8');
};

CASTLES.getCastle = function(castleId){
  let castlesJson = JSON.parse( CASTLES.getCastles() );

  return castlesJson[castleId];
};

CASTLES.createCastle = function(castleName, kingdomId){
  let jsonCastles = JSON.parse( CASTLES.getCastles() ),
      nextCastleId = KINGDOMS.getNextId( jsonCastles )

  let jsonKingdoms = JSON.parse( KINGDOMS.getKingdoms() )


      jsonKingdoms[kingdomId].castleIds.push( nextCastleId )


      jsonCastles[nextCastleId] = {
        id: nextCastleId,
        name: castleName,
        liegeIds: []
      }

    KINGDOMS.saveJson('./data/kingdoms.json', jsonKingdoms)
    KINGDOMS.saveJson('./data/castles.json', jsonCastles)



};


CASTLES.getCastlesAndLieges = function(kingdomId){
  let castleIds = KINGDOMS.getKingdom(kingdomId)["castleIds"],
      castles = [];

  castleIds.forEach((castleId) => {
    let castle = CASTLES.getCastle( [castleId] );

    castles.push({
      name: castle['name'],
      id: castle['id'],
      liegeCount: castle['liegeIds'].length
    })
  });

  return castles;
};

module.exports = CASTLES;
