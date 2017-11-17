var express = require('express');
var router = express.Router();
let hierarchy = require('../lib/extract');

function getCurrentState(paramObj){
	let returnArray;
	let keys;
	let displayObject;
	if(!paramObj.kingdom){
		keys = Object.keys(hierarchy.kingdoms)
		displayObject = hierarchy.kingdoms;
	} else if(!paramObj.castle){
		keys =  hierarchy.kingdoms[paramObj.kingdom].castleIds;
		displayObject = hierarchy.castles;
	} else if(!paramObj.liege){
		keys = hierarchy.castles[paramObj.castle].liegeIds;
		displayObject = hierarchy.lieges;
	}else {
		keys = hierarchy.lieges[paramObj.liege].vassalIds;
		displayObject = hierarchy.vassals;
	}
	returnArray = keys.map(x => {
		return displayObject[x];
	});
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
