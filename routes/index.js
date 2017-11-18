var express = require('express');
var router = express.Router();
let hierarchy = require('../lib/extract');

function getCurrentState(paramObj){
	let returnArray;
	let keys;
	let displayObject;
	let displayArray;

	if(!paramObj.kingdom){
		keys = Object.keys(hierarchy.kingdoms)
		displayObject = hierarchy.kingdoms;
		returnArray = keys.map(x => {
			displayObject[x].display = [`King: ${hierarchy.kings[displayObject[x].kingId].name}`, 
			`Queen: ${hierarchy.queens[displayObject[x].queenId].name}`, 
			`Number of Castles: ${displayObject[x].castleIds.length}`]
			return displayObject[x];
	});
		
	} else if(!paramObj.castle){
		keys =  hierarchy.kingdoms[paramObj.kingdom].castleIds;
		displayObject = hierarchy.castles;
		returnArray = keys.map(x => {
			displayObject[x].display = displayObject[x].liegeIds.map( y => {
				return `Liege Name: ${hierarchy.lieges[y].name}  Number of vassals: ${hierarchy.lieges[y].vassalIds.length}`;
			})
			return displayObject[x];
		}); 
	} else if(!paramObj.liege){
		keys = hierarchy.castles[paramObj.castle].liegeIds;
		displayObject = hierarchy.lieges;
		returnArray = keys.map(x => {
			displayObject[x].display = displayObject[x].vassalIds.map( y => {
				return `Vassal Name: ${hierarchy.vassals[y].name}`;
			})
			return displayObject[x];
		}); 
	}else {
		keys = hierarchy.lieges[paramObj.liege].vassalIds;
		displayObject = hierarchy.vassals;
		returnArray = keys.map(x => {
			return displayObject[x];
		})
	}
	


	return returnArray;
}


///:kingdom/:castle/:liege
/* GET home page. */
/*router.get('/', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
});

router.get('/:kingdom', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
});
*/

router.get('/:kingdom/:castle/:liege/', function(req, res, next){
	let currentState = getCurrentState(req.params);
	console.log(req.path);
	//res.render('index', {path: req.path});
  res.render('index', { items: currentState });
});
router.get('/:kingdom/:castle/', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.path);
  res.render('index', { items: currentState });
});
router.get('/:kingdom/', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.url);
  res.render('index', { items: currentState });
});
router.get('/', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
  next();
});

router.post('/:kingdom/:castle/:liege/', function(req,res,next) {
	let fs = require('fs');
	let currentState = getCurrentState(req.params);
	let newVassal = { id: Object.keys(hierarchy.vassals).length +1, name: req.body.name };
	let name = '';
	hierarchy.vassals[Object.keys(hierarchy.vassals).length + 1]= newVassal;
	hierarchy.lieges[req.params.liege].vassalIds.push(newVassal.id);
	console.log(hierarchy.vassals);
	console.log(req.headers);
	fs.writeFileSync('./data/vassals.json', JSON.stringify(hierarchy.vassals));
	fs.writeFileSync('./data/lieges.json', JSON.stringify(hierarchy.lieges));
	res.render('index', { items: currentState})
})


router.post('/:kingdom/:castle/', function(req,res,next) {
	let fs = require('fs');
	let currentState = getCurrentState(req.params);
	let newLiege = { id: Object.keys(hierarchy.lieges).length, name: req.body.name };
	hierarchy.lieges[Object.keys(hierarchy.lieges).length]= newLiege;
	hierarchy.castles[req.params.castle].liegeIds.push(newLiege.id);
	fs.writeFileSync('./data/lieges.json', JSON.stringify(hierarchy.lieges));
	fs.writeFileSync('./data/castles.json', JSON.stringify(hierarchy.castles));
	res.render('index', { items: currentState})
})

router.post('/:kingdom/', function(req,res,next) {
	let fs = require('fs');
	let currentState = getCurrentState(req.params);
	let newCastle = { id: Object.keys(hierarchy.castles).length, name: req.body.name };
	hierarchy.castles[Object.keys(hierarchy.castles).length]= newCastle;
	hierarchy.kingdoms[req.params.kingdom].castleIds.push(newCastle.id);
	fs.writeFileSync('./data/castles.json', JSON.stringify(hierarchy.castles));
	fs.writeFileSync('./data/kingdoms.json', JSON.stringify(hierarchy.kingdoms));
	res.render('index', { items: currentState})
})


router.post('/', function(req,res,next) {
	let fs = require('fs');
	let currentState = getCurrentState(req.params);
	let newKingdom = { id: Object.key(hierarchy.kingdoms).length, name: req.body.name };
	hierarchy.kingdoms[Object.keys(hierarchy.kingdoms).length]= newKingdom;
	fs.writeFileSync('./data/kingdoms.json', JSON.stringify(hierarchy.kingdoms));
	res.render('index', { items: currentState})
})


module.exports = router;
