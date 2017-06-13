const express = require('express');
const router = express.Router();
const { getKingdoms, getKingdomInfo, addKingdom } = require('../services/traverse-kingdom');


router.get("/", (req, res) => {
    const getAllKingdoms = getKingdoms();

    res.render("kingdoms", { getAllKingdoms });
});

router.get('/:kingdom', (req,res) => {
    const kingdomSelected = req.params.kingdom;
    //get all castles for the selected kingdom
    console.log(kingdomSelected);
    res.end();
});
router.post('/', (req, res) => {
    const kingdomeName = req.body.kingdom;
    const kingName = req.body.king;
    const queenName = req.body.queen;
    addKingdom(kingdomeName, kingName, queenName);

    res.redirect("back");

});


module.exports = router;