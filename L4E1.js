var http = require('http');
var url = require('url');
var {fork} = require('child_process');

http.createServer(function (req, res) {
    console.log('Request Received!');
   
    var queryData = url.parse(req.url, true).query;
    console.log(queryData);
    var myUrl = queryData.url;

    //res.writeHead(200, {'Content-Type': 'text/plain' });
    console.log('Server My URL: '+myUrl);

    var child = fork('L4E1child.js');
    child.send(myUrl);
    
    child.on('message', (file) => {
        console.log("Incoming File"+file);
        //res.write(file);
        res.end(file);
    });

}).listen(4000, '127.0.0.1');