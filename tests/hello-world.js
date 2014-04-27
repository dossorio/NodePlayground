/**
 * Created by dossorio on 26/04/2014.
 */

var http = require("http");

requestListener = function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("HEllo");
    res.end();
    console.log("Request received");
};

http.createServer(requestListener).listen(8888);

console.log("Server running!");

