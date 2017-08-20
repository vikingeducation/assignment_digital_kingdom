var fs = require('fs');
const file = "./data/kingdoms.json";

var Wrapper = {
	getKingdoms: function(){
		var data = fs.readFileSync(file).toString('utf8');
		var json = JSON.parse(data);
		return json.kingdoms;
	},

	num_kingdoms: function(){
		var kingdoms = this.getKingdoms();
		return kingdoms.length;
	},

	getCastles: function(kingdom){
		var json = this.getKingdoms()[0];
		return json.castles;
	},

	getLeiges: function(kingdom, castle){
		var json = this.getCastles(kingdom);
		var leiges;

		//get name property by looping through array
		json.forEach((obj) => {
			if(obj.name == castle){
				leiges = obj.leiges;
			}
		});
		return leiges;
	}
}

module.exports = Wrapper;