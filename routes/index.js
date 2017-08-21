var express = require('express');
var wrapper = require("./../store/wrapper.js");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var kingdoms = wrapper.getKingdoms();
	var amount = wrapper.num_kingdoms();
	console.log(amount);
  	res.render('index', { 
  		kingdoms: kingdoms,
  		amount:amount
  	});
});

router.post('/', function(req, res){
	var name = req.body.name;
	name = name.replace(/\s/gi, "-");
	wrapper.addKingdom(name);
	res.redirect("back");
})

module.exports = router;
