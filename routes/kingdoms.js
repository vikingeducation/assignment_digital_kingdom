const express = require("express");
const router = express.Router();

const {getKingdoms} = require('../services/kingdom-services');


router.get('/', (req, res) => {
  const allKingdoms = getKingdoms();
  res.render('kingdoms', {allKingdoms});
});