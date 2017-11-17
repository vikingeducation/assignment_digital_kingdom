var express = require('express');
var router = express.Router();
let heirarchy = require('../lib/extract');

function getCurrentState(paramObj){
	if(!paramObj.kingdoms){
		return paramObj.kingdoms;
	} else if(!paramObj.castles){
		return paramObj.castles;
	} else if(!paramObj.lieges){
		return paramObj.lieges;
	} else {
		return paramObj.kingdoms;
	}
}



///:kingdom/:castle/:liege
/* GET home page. */
router.get('/', function(req, res, next) {
	const currentState = getCurrentState(req.params);
	console.log(currentState);
  res.render('index', { items: currentState });
});

router.get('/:kingdom', index) {
	const currentState = getCurrentState(req.params);
	console.log(currentState);
  res.render('index', { items: currentState });
}
;
router.get('/:kingdom/:castle', index);
router.get('/:kingdom/:castle/:liege', index);

/*
router.get('/:title', function(req, res, next) {
  console.log(req.params);
  res.render('index', { title: req.params });
});
*/

module.exports = router;
