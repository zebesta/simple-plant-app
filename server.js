// call the packages we need
var express    = require('express');        // call express
var fs = require('fs');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

//Database and local hosting for it
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/simple-plant-app/data');

//locally degined schema for mongoose
var Plant     = require('./app/models/plant');

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        //set port
var router = express.Router();              // get an instance of the express Router

//middleware to use for every request sent to the API, regardless of what it is for
router.use(function (req, res, next){
  //do logging whne API is accessed
  console.log('Something is hapenning!');
  next(); // goes to the next route instead of stopping here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to the api!' });
});

// more routes for our API will happen here
//HTML to allow users to add plant to the database
app.get('/index.html', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
//HTML to show current database values to users
app.get('/show.html', function(req, res) {
    res.sendfile('show.html', {root: __dirname })
});

// on routes that end in /plants
// ----------------------------------------------------
router.route('/plants')
    .post(function(req, res) {

        var plant = new Plant();      // create a new instance of the Plant model
        plant.name = req.body.name || 'n/a';  // set the plants name (comes from the request)
        plant.color = req.body.color || 'n/a';
        plant.type = req.body.type || 'n/a';
        console.log('Plant being posted and the plants name is: '+plant.name + ' and the color is: '+plant.color + ' type: '+plant.type);
        // save the plant and check for errors
        plant.save(function(err, plant) {
            if (err) {
              res.send(err);
            }
            res.json({ message: 'Plant created!' });
        });

    })

    //get all the plants! (accessed at POST http://localhost:8080/api/plants)
    .get(function(req, res){
      console.log('Plant request sent to get all the plants!');
      Plant.find(function (err, plants){
        if (err) {
          res.send(err);
        }
        res.json(plants);
      });

    });
  router.route('/plants/:plant_id')
    .get(function(req,res){
      //find plant based on id
      Plant.findById(req.params.plant_id, function(err, plant){
        if(err){
          res.send(err);
        }
        console.log(plant.name + ' ' + plant.color);
        res.send(plant);

      })
    })
    .put(function(req,res){
      //update plant based on ID and new data in the request
      Plant.findById(req.params.plant_id, function (err, plant){
        if (err) {
          res.send(err);
        }
        console.log('Changing ' + plant.name + ' to ' + req.body.name);
        console.log('Changing ' + plant.color + ' to ' + req.body.color);

        plant.name = req.body.name;
        plant.color = req.body.color;
        plant.save(function(err, plant) {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Plant updated!' });
        });
      });
    })
    .delete(function(req,res){
      Plant.remove({
        _id: req.params.plant_id
      }, function(err, bear){
        if (err)
          res.send(err);
        res.json({message: 'Successfully deleted!'});
      });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);
