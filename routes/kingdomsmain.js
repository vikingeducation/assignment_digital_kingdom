const express = require('express');
const router = express.Router();
const fs = require('fs')
const kingdom = require('./kingdomstore').kingdoms




router.get('/', (req,res) =>{


let kingVariables = kingdom()
console.log(kingVariables)
res.render('kings', {kingVariables: kingVariables})

})

module.exports = router





