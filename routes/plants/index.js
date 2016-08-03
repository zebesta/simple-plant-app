const plants = require('express').Router();
var path=require("path");


//database related variables
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/simple-plant-app/data');
//locally degined schema for mongoose
var Plant     = require('../../app/models/plant');

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
        //res.sendfile(path.join(__dirname, '/../../show.html' ));
    });

});
//If id is sent:
plants.get('/:plant_id', (req,res) => {
      //find plant based on id
      Plant.findById(req.params.plant_id, (err, plant) => {
        if(err){
          res.send(err);
        }
        console.log(plant.name + ' ' + plant.color + ' ' + plant.type);
        res.send(plant);
      })
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
