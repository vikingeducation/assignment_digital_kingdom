const express = require('express');
const colors = require('colors');

const app = express();

app.listen(3000, () => {
  console.log('Here we go!'.blue);
});