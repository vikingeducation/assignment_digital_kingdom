const FS = require('fs');

const KINGDOMS = {};

KINGDOMS.getKingdoms = function(){
  return FS.readFileSync('./data/kingdoms.json', 'utf8');
};

KINGDOMS.getKingdom = function(kingdomId){
  let kingdomsJson = JSON.parse( KINGDOMS.getKingdoms() );
  return kingdomsJson[kingdomId];
}

KINGDOMS.getKings = function(){
  return FS.readFileSync('./data/kings.json', 'utf8');
};

KINGDOMS.getQueens = function(){
  return FS.readFileSync('./data/queens.json', 'utf8');
};

KINGDOMS.getKingdomsKingsAndQueens = function(){
  let kingdomsJSON = JSON.parse( KINGDOMS.getKingdoms() ),
      kingsJson = JSON.parse( KINGDOMS.getKings() ),
      queensJson = JSON.parse( KINGDOMS.getQueens() ),
      kingdoms = [];

  for (kingdomId in kingdomsJSON) {

    let kingdomName = kingdomsJSON[kingdomId]["name"],
        castleCount = kingdomsJSON[kingdomId]["castleIds"].length,
        kingId = kingdomsJSON[kingdomId]["kingId"],
        queenId = kingdomsJSON[kingdomId]["queenId"];

        kingdoms.push( {
          kingdomName: kingdomName,
          castleCount: castleCount,
          kingName: kingsJson[kingId]["name"],
          queenName: queensJson[queenId]["name"],
          id: kingdomId
        });
  }
  return kingdoms;
};

KINGDOMS.createKingdomsKingsAndQueens = function(kingdomObj){
  let kingdoms = JSON.parse( KINGDOMS.getKingdoms() ),
      nextKingdomId = KINGDOMS.getNextId( kingdoms );

  let kings = JSON.parse( KINGDOMS.getKings() ),
      nextKingId = KINGDOMS.getNextId( kings )

  let queens = JSON.parse( KINGDOMS.getQueens() ),
      nextQueenId = KINGDOMS.getNextId( queens )

    kingdoms[nextKingdomId] = {
      id: nextKingdomId,
      name: kingdomObj.kingdomName,
      kingId: nextKingdomId,
      queenId: nextKingdomId,
      castleIds: []
    }

    kings[nextKingId] = {
      id: nextKingId,
      name: kingdomObj.kingName
    }

    queens[nextQueenId] = {
      id: nextQueenId,
      name: kingdomObj.queenName
    }

    KINGDOMS.saveJson('./data/kingdoms.json', kingdoms)
    KINGDOMS.saveJson('./data/kings.json', kings)
    KINGDOMS.saveJson('./data/queens.json', queens)

};

KINGDOMS.getNextId = function(kingdomsJson){
  return Object.keys( kingdomsJson ).length + 1;
};

KINGDOMS.saveJson = function(filename, json){
  FS.writeFileSync(filename, JSON.stringify(json, null, 4));
};

module.exports = KINGDOMS;
