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
			displayObject[x].display = hierarchy.lieges[displayObject[x].liegeIds].map( y => {
				return `${hierarchy.lieges[y].name}  Number of vassals: ${hierarchy.lieges[y].vassalIds.length}`;
			})}); 
	} else if(!paramObj.liege){
		keys = hierarchy.castles[paramObj.castle].liegeIds;
		displayObject = hierarchy.lieges;
	}else {
		keys = hierarchy.lieges[paramObj.liege].vassalIds;
		displayObject = hierarchy.vassals;
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



module.exports = router;
