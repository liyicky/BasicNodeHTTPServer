var http = require("http");
var url  = require("url");

function start(route, handle) {

  http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " Received");

    var content = route(handle, pathname);

    response.writeHead(200, {"Content-Type":  "text/plain"});
    response.write(content);
    response.end();
  }).listen(9001);

  console.log("Server Start");
}

exports.start = start
