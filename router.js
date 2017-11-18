const express = require("express");
const router = express.Router();
const world = require("./world");

router.get("/:resource/:id", (req, res) => {
  let resource = req.params.resource;
  let id = req.params.id;
  resourceFunction="get"+resource.charAt(0).toUpperCase()+resource.slice(1);
  console.log(resourceFunction);
  let resourceData = world[resourceFunction](id);
  let targetResource = resourceData[id];
  let childCheck = false;

  //liegeIds, castleIds, vassalIds, kingdomIds
  let keys = Object.keys(targetResource);
  let childArray = [];
  let childKey;
  keys.forEach(key =>{
    if (typeof key === "object"){
      childCheck = true;
      childKey = key;
    }
  })
  let params = {};

  if (childCheck){
    let childFunction = "get"+childKey.slice(0, childKey.length-3)[0].toUpperCase()+"s";
    console.log("childFunction is "+childFunction)
    //"liegeIds" ==> getLieges
    targetResource[childKey].forEach(childId =>{
      childArray.push(world[childFunction](childId));
    })
    let childType=childKey.slice(0, childKey.length-3)+"s";
    console.log("childType is "+childType);
    params[childType] = childArray;
  }

  resource = resource.slice(0,resource.length-1);

  params[resource] = targetResource;
  console.log(params["castle"]);
  console.log(params["lieges"]);

  res.render(resource, params);
});


module.exports = router;
