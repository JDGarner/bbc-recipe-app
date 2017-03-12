const express = require('express');
var path = require('path');
const app = express();

var port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  const dist = path.join(__dirname, '/dist/index.html');
  res.sendFile(dist);
});

app.listen(port, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
