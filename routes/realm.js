function realm(req, res) {
  // Check for kingdom id.
  console.log(req.params);

  let title;
  if (!req.params.kingdomId) {
    // Display all kingdoms for realms.
    title = 'Kingdoms';
  } else {
    // We got one, display single kindom.
    title = 'Kingdom';
  }

  // Render our page.
  res.render('index', {
    title: title
  });
}

module.exports = realm;
