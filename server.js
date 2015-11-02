var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8811;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(cors());




 app.listen(port, function(){
   console.log('Listening on port: ' + port);
 });
