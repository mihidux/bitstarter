var express = require('express');
var fs = require('fs');

// Junk line

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html').toString()); //'Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
