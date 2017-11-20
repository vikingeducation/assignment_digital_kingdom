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
    if (typeof targetResource[key] == "object"){
      childCheck = true;
      childKey = key;
    }
  })
  let params = {};

  console.log("childCheck is "+childCheck);

  if (childCheck){
    let childFunction = childKey.slice(0, childKey.length-3);
    childFunction = childFunction.charAt(0).toUpperCase() + childFunction.slice(1);
    childFunction = "get"+childFunction;
        //"liegeIds" ==> getLieges

    console.log("childKey is "+childKey)
    
    targetResource[childKey].forEach(childId =>{
      console.log("childId is "+childId);
      console.log("childFunction is "+childFunction);
      childArray.push(world[childFunction](childId));
    })
    let childType=childKey.slice(0, childKey.length-3)+"s";
    params[childType] = childArray;
  }

  resource = resource.slice(0,resource.length-1);

  params[resource] = targetResource;

  res.render(resource, params);
});


module.exports = router;
