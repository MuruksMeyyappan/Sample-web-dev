var express = require('express');
var routers = express.Router();
var path = require('path');

routers.get('/', function(req, res){
    res.sendfile('HomePage.html', {root : path.join(__dirname,'./src')});
    console.log("server refereshedharry_pregular");
 });
 routers.post('/', function(req, res){
    res.send('POST route on things.');
 });
 
 //export this router to use in our index.js
 module.exports = routers;