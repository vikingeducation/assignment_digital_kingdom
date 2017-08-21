var fs = require('fs');
const file = "./data/kingdoms.json";

var Wrapper = {
	getKingdoms: function(){
		var data = fs.readFileSync(file).toString('utf8');
		var json = JSON.parse(data);
		return json;
	},

	addKingdom: function(kingdom){
		var kingdoms = this.getKingdoms();

		var new_kingdom = {}
		new_kingdom.name = kingdom;

		//empty arrays so other methods can use .push later
		new_kingdom.castles = [];
		new_kingdom.castles.leiges = [];

		kingdoms.push(new_kingdom);

		fs.writeFileSync(file, JSON.stringify(kingdoms, null, 4))
	},


	num_kingdoms: function(){
		var kingdoms = this.getKingdoms();
		return kingdoms.length;
	},

	getCastles: function(kingdom){
		var json = this.getKingdoms();
		var castles = this.search_items(json, kingdom, 'castles');
		return castles === undefined ? JSON.parse([]) : castles;
	},

	addCastle: function(kingdom, castle){
		var json = this.getKingdoms();

		var new_castle = {}
		new_castle.name = castle;
		new_castle.leiges = [];

		//find the correct kingdom to push to
		var castles = this.search_items(json, kingdom, "castles");
		castles.push(new_castle);

		fs.writeFileSync(file, JSON.stringify(json, null, 4))
		
	},

	getLeiges: function(kingdom, castle){
		var json = this.getCastles(kingdom);
		var leiges = this.search_items(json, castle, 'leiges');
		return leiges;
	},

	addLeige: function(kingdom, leige, castleName){
		var json = this.getKingdoms();

		var new_leige = {}
		new_leige.name = leige;
		new_leige.vassels = [];

		var object;

		json.forEach((obj) => {
			if(obj.name == kingdom){
  				var castles = obj['castles'];
  				//nested search within castle name
  				var leiges = this.search_items(castles, castleName, 'leiges');
  				object = leiges;
			}
		});
		object.push(new_leige);

		fs.writeFileSync(file, JSON.stringify(json, null, 4))
	},

	search_items: function(json, name, asset){
		var object;
		//get name property by looping through array
		json.forEach((obj) => {
			//when it finds the kingdom, return asset from it
			if(obj.name == name){
  				object = obj[asset];
			}
		});
		return object;
	},

}

module.exports = Wrapper;