const plants = require('express').Router();
var path=require("path");


//database related variables
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/simple-plant-app/data');
//locally degined schema for mongoose
var Plant     = require('../../app/models/plant');
mongoose.model('Plant', Plant);

//If id is sent:
plants.param('plant_id', (req, res, next, value) => {
  console.log("plants param is being called!")
  req.plant_id = value;
  next();
});

// Routed from /api/plants
plants.get('/', (req, res) => {
      console.log('Plant request sent to get all the plants!');
      Plant.find((err, plants) => {
        if (err) {
          res.send(err);
         }
         res.json(plants);
       });

     })
     .post('/', (req, res) => {
    var plant = new Plant();      // create a new instance of the Plant model
    plant.name = req.body.name || 'n/a';  // set the plants name (comes from the request)
    plant.color = req.body.color || 'n/a';
    plant.type = req.body.type || 'n/a';
    console.log('Plant being posted and the plants name is: '+plant.name + ' and the color is: '+plant.color + ' type: '+plant.type);
    // save the plant and check for errors
    plant.save((err, plant) => {
        if (err) {
          res.send(err);
        }
        res.send({ message: 'Plant created!' });
        res.sendfile(path.join(__dirname, '/../../show.html' ));
    });

});

var findPlantInDatabaseMiddleware = function(req, res, next){
  if(req.params.plant_id){
    console.log("Plant ID was detected: "+req.params.plant_id);
    Plant.findById(req.params.plant_id, (err, plant) => {
      if(err){
        return next(err);
        // res.send(err);
      }
      console.log(plant.name + ' ' + plant.color + ' ' + plant.type);
      // res.send(plant);
      return next(plant);
    });

  }else{
    return next();
  }
}

plants.get('/:plant_id', findPlantInDatabaseMiddleware, (req,res,next) => {
      return res.render('plant_id', request.plant_id);
    });

    plants.delete(('/:plant_id'), (req,res) => {
          Plant.remove({
            _id: req.params.plant_id
          }, (err, plant) => {
            if (err)
              res.send(err);
            res.json({message: 'Successfully deleted!'});
          });
      });


module.exports = plants;
