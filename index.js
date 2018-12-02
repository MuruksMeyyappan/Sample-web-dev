var express = require('express');
var app = express();
var path = require('path');
 
app.use('/cssFiles',express.static(__dirname + '/styles'));
app.use('/image',express.static(__dirname +  '/image'));
app.get('/', function(req, res) {
    res.sendfile('HomePage.html', {root : path.join(__dirname,'./src')});
});

app.listen(8000);