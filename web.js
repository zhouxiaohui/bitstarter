var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var buff = '';
  fs.readFileSync('index.html', function (err, data) {
    if (err) throw err;
    buff = data;
  });
  respsonse.send(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
