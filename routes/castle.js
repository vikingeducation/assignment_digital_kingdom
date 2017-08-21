var express = require('express');
var wrapper = require("./../store/wrapper.js");
var router = express.Router();

var kingdom_name;
var castle_name;

router.get("/:name", function(req, res){
	var name = req.params.name;
	var url = req.originalUrl;

	//split url by slash, pass kingdom and stable to globals
	kingdom_name = url.split("/")[2];
	castle_name = url.split("/")[4]
	
	var leiges = wrapper.getLeiges(kingdom_name, name);
	var amount = leiges.length;

	res.render('castle', {
		name: name,
		amount: amount,
		leiges: leiges,
		kingdom_name: kingdom_name
	})
});

router.post("/", function(req, res){
	var name = req.body.name;
	wrapper.addLeige(kingdom_name, name, castle_name);
	res.redirect("back");
})

module.exports = router;