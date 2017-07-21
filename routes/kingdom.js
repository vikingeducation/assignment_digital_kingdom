function kingdom(req, res) {
  console.log(req.params);
  res.statusCode = 200;
  res.end('A kingdom');
}

module.exports = kingdom;
