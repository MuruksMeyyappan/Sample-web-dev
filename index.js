const http = require('http');
const hostname = 'localhost';
const port = 8000;
const fs = require('fs');

fs.readFile('HomePage.html',(err, html) => {
        if(err){
                throw err;
        }
        const server = http.createServer((req , res)=>{
                res.statusCode = 200;
                res.setHeader('Content-type', 'text/html');
                res.write(html)
                res.end();
        });
        
        server.listen(port, hostname , ()=>{
                console.log("server started port no:"+port);
        });
});
