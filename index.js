var express = require('express');
var app = express();

var routers = require('./routers.js');

// css js and image files paths 
app.use('/',express.static(__dirname + '/styles'));
app.use('/',express.static(__dirname +  '/image'));
app.use('/',express.static(__dirname + '/scripts'))
// app.all('/', function(req, res) {
//     res.sendfile('HomePage.html', {root : path.join(__dirname,'./src')});
//     console.log("server refereshedharry_pregular");
// });
// app.post('/hello', function(req, res){
//         res.send("You just called the post method at '/hello'!\n");
//      });



// path-names
app.use('/Homepage',routers)
app.use('/age-rating',routers)
app.listen(8000);