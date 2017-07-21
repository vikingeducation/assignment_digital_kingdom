const express = require("express");
const app = express();
const kingdoms = require("./routes/kingdoms");
const routeIndex = require("./routes/index");

app.use("/", routeIndex);
app.use("/kingdoms", kingdoms);

app.listen(3000, () => {
	console.log("Listening...");
})