var express = require('express');
var router = express.Router();
let hierarchy = require('../lib/extract');

function getCurrentState(paramObj){
	let returnArray;
	if(!paramObj.kingdom){
		displayObject = hierarchy.kingdoms;
	} else if(!paramObj.castle){
		displayObject = hierarchy.castles;
	} else if(!paramObj.liege){
		displayObject = hierarchy.lieges;
	}else {
		displayObject = hierarchy.vassals;
	}
	returnArray = Object.keys(displayObject).map(x => {
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
router.get('/:kingdom/:castle/:liege', function(req, res, next){
	let currentState = getCurrentState(req.params);
	console.log(req.params);
	console.log(currentState)
  res.render('index', { items: currentState });
});
router.get('/:kingdom/:castle', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
});
router.get('/:kingdom', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
});
router.get('/', function(req, res, next) {
	let currentState = getCurrentState(req.params);
	console.log(req.params);
  res.render('index', { items: currentState });
});

router.get('/:title', function(req, res, next) {
  console.log(req.params);
  res.render('index', { title: req.params });
});


module.exports = router;
