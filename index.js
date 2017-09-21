const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.end("hey");
});

//server
const port = 3000;
const host = "localhost";

app.listen(port, host, () => {
	console.log(`listening on ${host}/${port}`);
});
