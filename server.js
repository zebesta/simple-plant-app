// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/simple-plant-app/data');
var Plant     = require('./app/models/plant');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        //set port
var router = express.Router();              // get an instance of the express Router



//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);
