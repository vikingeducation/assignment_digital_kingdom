var express = require('express');
var wrapper = require("./../store/wrapper.js");
var router = express.Router();

router.get("/:name", function(req, res){
	var name = req.params.name;
	var url = req.originalUrl;
	var kingdom_name = url.split("/")[2];
	

	var leiges = wrapper.getLeiges(kingdom_name, name);
	var amount = leiges.length;

	console.log(leiges);

	res.render('castle', {
		name: name,
		amount: amount,

		leiges: leiges
	})
});

module.exports = router;