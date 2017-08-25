
const express = require("express");
const {
  addKingdom, getJson, addCastle, addLiege, addVassal
} = require("../services/kingdom-store");
const router = express.Router();

//----GETS---
router.get("/", (req, res) => {
  const data = getJson();
  res.render("home", { data })
})

router.get("/:kingdomId", (req, res) => {
  var kingdomId= req.params.kingdomId;
  var data = getJson();
  data = data[kingdomId];
  res.render("kingdom/view", { data, kingdomId })
})

router.get("/:kingdomId/:castleId", (req, res) => {
  var kingdomId= req.params.kingdomId;
  var castleId = req.params.castleId;
  var data = getJson();
  data = data[kingdomId].Castles[castleId];
  res.render("castle/view", { data, kingdomId, castleId })
})

router.get("/:kingdomId/:castleId/:liegeId", (req, res) => {
  var kingdomId= req.params.kingdomId;
  var castleId = req.params.castleId;
  var liegeId = req.params.liegeId;
  var data = getJson();
  data = data[kingdomId].Castles[castleId].Lieges[liegeId];
  res.render("liege/view", { data, kingdomId, castleId, liegeId })
})

//----POSTS-----
router.post("/", (req, res) => {
  const kingdomName = req.body.kingdomName;
  const kingName = req.body.kingName;
  const queenName = req.body.queenName;
  addKingdom(kingdomName, kingName, queenName);
  res.redirect("back");
})

router.post("/:kingdomId/castles", (req, res) => {
  const castleName = req.body.castleName;
  const kingdomId = req.params.kingdomId;
  addCastle(castleName, kingdomId);
  res.redirect("back");
})

router.post("/:kingdomId/castles/:castleId/lieges", (req, res) => {
  const liegeName = req.body.liegeName;
  const kingdomId = req.params.kingdomId;
  const castleId = req.params.castleId;
  addLiege(liegeName, kingdomId, castleId);
  res.redirect("back");
})

router.post("/:kingdomId/castles/:castleId/lieges/:liegeId/vassals", (req, res) => {
  const vassalName = req.body.vassalName;
  const kingdomId = req.params.kingdomId;
  const castleId = req.params.castleId;
  const liegeId = req.params.liegeId;
  addVassal(vassalName, kingdomId, castleId, liegeId);
  res.redirect("back");
})




module.exports = router;
