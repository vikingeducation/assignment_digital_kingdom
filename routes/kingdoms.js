const express = require('express');
const router = express.Router();
const { getKingdoms, getCastles, getLieges, getVassals } = require('../services/kingdom_getters.js');
const { addKingdom, addCastles, addLiegies, addVassals } = require('../services/kingdom_getters.js');
const { deleteLiege, deleteCastle, deleteKingdom, deleteVassal } = require('../services/traverse-kingdom');


router.get("/", (req, res) => {
    const getAllKingdoms = getKingdoms();

    res.render("kingdoms", { getAllKingdoms });
});

router.get('/:kingdom', (req, res) => {
    const kingdomSelected = req.params.kingdom;
    //get all castles for the selected kingdom
    const castles = getCastles(kingdomSelected);

    res.render('kingdom/show', { kingdomSelected, castles });
});

router.get('/:kingdom/castles/:castle', (req, res) => {
    const kingdomSelected = req.params.kingdom;
    const castleSelected = req.params.castle;
    const lieges = getLieges(kingdomSelected, castleSelected);

    res.render('castle/show', { kingdomSelected, castleSelected, lieges });

});

router.get('/:kingdom/castles/:castle/lieges/:liege/vassals', (req, res) => {
    const kingdomSelected = req.params.kingdom;
    const castleSelected = req.params.castle;
    const liegeSelected = req.params.liege;
    const vassals = getVassals(kingdomSelected, castleSelected, liegeSelected);

    res.render('liege/show', { kingdomSelected, castleSelected, liegeSelected, vassals });

});

router.post('/', (req, res) => {
    const kingdomName = req.body.kingdom;
    const kingName = req.body.king;
    const queenName = req.body.queen;
    addKingdom(kingdomName, kingName, queenName);

    res.redirect("back");
});

router.post('/:kingdom', (req, res) => {
    const castleName = req.body.castle;
    const kingdomName = req.params.kingdom
    addCastles(kingdomName, castleName);
    res.redirect("back");
});

router.post('/:kingdom/castles/:castle', (req, res) => {
    const kingdomName = req.params.kingdom
    const castleName = req.params.castle;
    const liegeName = req.body.liege;
    addLiegies(kingdomName, castleName, liegeName);
    res.redirect("back");
});

router.post('/:kingdom/castles/:castle/lieges/:liege', (req, res) => {
    const kingdomName = req.params.kingdom
    const castleName = req.params.castle;
    const liegeName = req.params.liege
    const vassalName = req.body.vassal;
    addVassals(kingdomName, castleName, liegeName, vassalName);
    res.redirect("back");
});

router.post('/:kingdom/castles/:castle/lieges/:liege/delete', (req, res) => {
    const kingdomName = req.params.kingdom
    const castleName = req.params.castle;
    const liegeName = req.params.liege;

    deleteLiege(kingdomName, castleName, liegeName);
    res.redirect("back");
});

router.post('/:kingdom/castles/:castle/delete', (req, res) => {
    const kingdomName = req.params.kingdom
    const castleName = req.params.castle;
    deleteCastle(kingdomName, castleName);
    res.redirect("back");
});

router.post('/:kingdom/delete', (req, res) => {
    const kingdomName = req.params.kingdom

    deleteKingdom(kingdomName);
    res.redirect("back");
});

router.post('/:kingdom/castles/:castle/lieges/:liege/vassals/:vassal/delete', (req, res) => {
    const kingdomName = req.params.kingdom
    const castleName = req.params.castle;
    const liegeName = req.params.liege
    const vassalName = req.params.vassal;
    deleteVassal(kingdomName, castleName, liegeName, vassalName);
    res.redirect("back");
});


module.exports = router;