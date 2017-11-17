const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const fs = require('fs')
const kingdom = require('./kingdomstore').kingdoms



router.get('/', (req,res) =>{


res.send(kingdom())

})

module.exports = router





