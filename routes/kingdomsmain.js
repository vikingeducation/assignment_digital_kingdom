const express = require('express');
const router = express.Router();
const fs = require('fs')
const kingdoms = () => {
 	const data = fs.readFileSync('./data/kingdoms.json');
 	const json = JSON.parse(data);
 	const kingdom = Object.keys(json);
 	return json;

}

router.get('/', (req,res) =>{


res.send(kingdoms())

})

module.exports = router 

