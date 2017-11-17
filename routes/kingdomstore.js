const fs = require('fs')

const kingdoms = () => {
 	const data = fs.readFileSync('./data/kingdoms.json');
 	const json = JSON.parse(data);
 	const kingdom = Object.keys(json);
 	let kingdoms = {};
 	const names = []
 	/*for (var i = 0; i < kingdom.length; i++) {
 		names.push(json[kingdom[i]]);
 	}*/
	 	
 	const data1 = fs.readFileSync('./data/kings.json');
 	const jsonk = JSON.parse(data1)
 	const kings = Object.keys(jsonk);
 	let kingnames = []
k

 	const data2 = fs.readFileSync('./data/queens.json');
 	const jsonq = JSON.parse(data2)
 	const queens = Object.keys(jsonq);
 	let queennames = []

 	const data3 = fs.readFileSync('./data/castles.json');
 	const jsonc = JSON.parse(data3)
 	const castles = Object.keys(jsonc);

 	const data4 = fs.readFileSync('./data/lieges.json');
 	const jsonl = JSON.parse(data4)
 	const lieges = Object.keys(jsonl);


 	for (var k in json){
 		if (json[k].id === jsonk[k].id) {
 			json[k].kingname = jsonk[k].name
 		}
 	}

    for (var k in json) {
 		if (json[k].id === jsonq[k].id) {
 			json[k].queenname = jsonq[k].name
 		
 	}
    }

	for (var k in json) {
          for (var i = 0; i < json[k].castleIds.length; i++){
          if (json[k].castleIds[i] === jsonc[json[k].castleIds[i]].id){
          	json[k].castleIds[i] = (jsonc[json[k].castleIds[i]].name)
          	}


          }
 	
    

 
 	}

 	for (var k in json){
 		json[k].castlesLength = json[k].castleIds.length
 	}


 	for (var i =0; i < kings.length; i++) {
     for (var k in json) {
     kingdoms[i] = json[k]

}

}
return kingdoms
}



const lieges = () => {

	const data5 = fs.readFileSync('./data/vassals.json');
 	const jsonv = JSON.parse(data5)
 	const vassals = Object.keys(jsonc);

 	const data4 = fs.readFileSync('./data/lieges.json');
 	const jsonl = JSON.parse(data4)
 	const lieges = Object.keys(jsonl);

for (var k in jsonc){
 		for(var i = 0; i < jsonc[k].liegeIds.length; i++) {
 		if (jsonc[k].liegeIds[i] === jsonl[jsonc[k].liegeIds[i]].id){
          	jsonc[k].liegeIds[i] =   jsonl[jsonc[k].liegeIds[i]].name
          	}

 }
}
for (var k in jsonc){
 		jsonc[k].liegeslength = jsonc[k].liegeIds.length
 	}

       return jsonc

 	}


const castles = () => {

	const data3 = fs.readFileSync('./data/castles.json');
 	const jsonc = JSON.parse(data3)
 	const castles = Object.keys(jsonc);

 	const data4 = fs.readFileSync('./data/lieges.json');
 	const jsonl = JSON.parse(data4)
 	const lieges = Object.keys(jsonl);

for (var k in jsonc){
 		for(var i = 0; i < jsonc[k].liegeIds.length; i++) {
 		if (jsonc[k].liegeIds[i] === jsonl[jsonc[k].liegeIds[i]].id){
          	jsonc[k].liegeIds[i] =   jsonl[jsonc[k].liegeIds[i]].name
          	}

 }
}
for (var k in jsonc){
 		jsonc[k].liegeslength = jsonc[k].liegeIds.length
 	}

/*for (var k in jsonl){
	   jsonc[k].numberVassals = jsonc[k].vassalIds.length
}*/

       return jsonc

 	}


module.exports = {kingdoms, lieges, castles}