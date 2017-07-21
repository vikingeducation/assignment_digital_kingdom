const Express = require("express");
const app = Express();
const getKingdoms = require("./helpers/getKingdoms.js");

let host = "0.0.0.0";

app.get("/", function(req, res) {
  let kingdomNames = getKingdoms();
  res.send("Hello World!");
});
//app.use('/kingdom')

app.listen(3000, host, function() {
  console.log("Example app listening on port 3000!");
});

/*

/kingdom
/kingdom/kings
/kingdom/castles
/kingdom/castles/lieges
/kingdom/queens

*/
