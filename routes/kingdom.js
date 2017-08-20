var express = require('express');
var wrapper = require("./../store/wrapper.js");
var router = express.Router();

router.get('/:kingdomname', function(req, res){
	var name = req.params.kingdomname;
	var castles = wrapper.getCastles(name);
	var num_castles = castles.length;

	res.render('kingdom', {
		name: name,
		castles: castles,
		amount: num_castles
	});
});

module.exports = router;