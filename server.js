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

// on routes that end in /plants
// ----------------------------------------------------
router.route('/plants')
    .post(function(req, res) {

        var plant = new Plant();      // create a new instance of the Plant model
        plant.name = req.body.name;  // set the plants name (comes from the request)
        console.log('Plant being posted and the plants name is: '+plant.name);
        // save the plant and check for errors
        plant.save(function(err, plant) {
          console.log('trying to save plant and error is: '+err)
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
      //find plant bastd on id
      Plant.findById(req.params.plant_id, function(err, plant){
        if(err){
          res.send(err);
        }
        console.log(plant.name);
        res.send(plant);

      })
    })
    .put(function(req,res){
      Plant.findById(req.params.plant_id, function (err, plant){
        if (err) {
          res.send(err);
        }
        console.log('Changing ' + plant.name + ' to ' + req.body.name);
        plant.name = req.body.name;
        plant.save(function(err, plant) {
          if (err) {
            res.send(err);
          }
          res.json({ message: 'Plant updated!' });
        });
      });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
//Start the server
app.listen(port);
console.log('Magic happens on port ' + port);
