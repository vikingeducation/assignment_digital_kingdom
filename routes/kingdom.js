var express = require('express');
var wrapper = require("./../store/wrapper.js");
var router = express.Router();

var kingdom_name;

router.get('/:kingdomname', function(req, res){
	kingdom_name = req.params.kingdomname;
	var castles = wrapper.getCastles(kingdom_name);
	var num_castles = castles.length;


	res.render('kingdom', {
		name: kingdom_name,
		castles: castles,
		amount: num_castles
	});
});

router.post('/', function(req, res){
	var name = req.body.name;
	wrapper.addCastle(kingdom_name, name);
	res.redirect("back");
});

module.exports = router;