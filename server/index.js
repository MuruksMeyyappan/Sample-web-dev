const express = require('express');
const app = express();
const path = require('path');
const routers = require('./routers.js');
app.set('PORT', 5000)

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
  res.render('pages/about');
});
// agerating page 
app.get('/ageRating', function(req, res) {
    res.render('pages/ageRating');
});

// client files
app.use('/', express.static(path.join(__dirname, '../views')));

// app.use('/', routers);
app.listen(app.get('PORT'), (err) => {
  if (err) {
    throw err;
  }
  console.log(`The server started on port: ${app.get('PORT')}`);
});
