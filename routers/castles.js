const express = require('express')
const router = express.Router()


app.post("/:resource", (req, res) => {
  let resource = req.params.resource;
  let ownerId = req.body.ownerId;
  let ownerType = req.body.ownerType;
  let name = req.body.name;
  world.addResource(name, resource, ownerId, ownerType);
  console.log("http://localhost:3000" + "/" + ownerType + "/" + ownerId);
  res.redirect('/');
});