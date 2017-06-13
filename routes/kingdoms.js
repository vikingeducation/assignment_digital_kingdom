const express = require('express');
const router = express.Router();
const { getKingdoms, getKingdomInfo, addKingdom, getCastles, getLieges } = require('../services/traverse-kingdom');


router.get("/", (req, res) => {
    const getAllKingdoms = getKingdoms();

    res.render("kingdoms", { getAllKingdoms });
});

router.get('/:kingdom', (req,res) => {
    const kingdomSelected = req.params.kingdom;
    //get all castles for the selected kingdom
    const castles = getCastles(kingdomSelected);
    
    res.render('kingdom/show', {"kingdomName" : kingdomSelected, castles});
});

router.get('/:kingdom/:castle', (req,res) => {
    const kingdomSelected = req.params.kingdom;
    const castleSelected = req.params.castle;
    const lieges = getLieges(kingdomSelected, castleSelected);

    res.render('castle/show', {"castleName": castleSelected, lieges});

});
router.post('/', (req, res) => {
    const kingdomName = req.body.kingdom;
    const kingName = req.body.king;
    const queenName = req.body.queen;
    addKingdom(kingdomName, kingName, queenName);

    res.redirect("back");
});


module.exports = router;