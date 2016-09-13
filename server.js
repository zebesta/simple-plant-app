// call the packages we need
var express    = require('express');        // call express
var cors = require('cors')

var fs = require('fs');
const app        = express();                 // define our app using express
// const routes = require('./routes')
var bodyParser = require('body-parser');

//Database and local hosting for it
// var mongoose   = require('mongoose');
// mongoose.connect('mongodb://localhost/simple-plant-app/data');
//
// //locally degined schema for mongoose
// var Plant     = require('./app/models/plant');

// app.set('view engine', 'jade');
//allow cross origin requests
app.use(cors());
//app.options('*', cors()); // include before other routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        //set port
// var router = express.Router();              // get an instance of the express Router

//middleware to use for every request sent to the API, regardless of what it is for
// router.use(function (req, res, next){
//   //do logging whne API is accessed
//   console.log('Something is hapenning!');
//   next(); // goes to the next route instead of stopping here
// });
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to the api!' });
// });

// more routes for our API will happen here
//HTML to allow users to add plant to the database
// app.get('/index.html', function(req, res) {
//     res.sendfile('index.html', {root: __dirname })
// });
// //HTML to show current database values to users
// app.get('/show.html', function(req, res) {
//     res.sendfile('show.html', {root: __dirname })
// });
//default to show.html
app.get('/', function(req, res) {
    // res.sendfile('show.html', {root: __dirname })
    res.json({ message: 'hooray! welcome to the heroku deployed app!' });
});


// app.use('/api', routes);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);
