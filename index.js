const Express = require("express");
const app = Express();

app.get("/", function(req, res) {
  //kingdom

  res.send("Hello World!");
});
//app.use('/kingdom')

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

/*

/kingdom
/kingdom/kings
/kingdom/castles
/kingdom/castles/lieges
/kingdom/queens

*/
