var express = require('express');
var routers = express.Router();
var path = require('path');

// default page call (HTML)
routers.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/HomePage.html'));
  console.log("server refereshedharry_pregular");
});
routers.get('/ageRating', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/ageRating.html'));
  console.log("server for AgeRating");
});

//export this router to use in our index.js
module.exports = routers;