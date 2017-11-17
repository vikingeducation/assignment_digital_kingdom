var express = require('express');
var router = express.Router();
let heirarchy = require('../lib/extract');

let getCurrentState(paramObj){
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
  res.render('index', { title: 'Express' });
});

module.exports = router;
