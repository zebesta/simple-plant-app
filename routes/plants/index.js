const plants = require('express').Router();

//database related variables
var mongoose   = require('mongoose');
var cors = require('cors');
mongoose.connect('mongodb://localhost/simple-plant-app/data');
//locally degined schema for mongoose
var Plant     = require('../../app/models/plant');
var types = require('./types');
mongoose.model('Plant', Plant);


//Routes to get specific types of plants
plants.use('/types', types);


// Routed from /api/plants
plants.get('/', (req, res) => {
      console.log('Plant request sent to get all the plants!');
      //if name query is being send
      if(req.query['name']){
        console.log('Plane request was sent with the name query!!: ' + req.query['name']);
        Plant.find({name: { "$regex": req.query['name'],  "$options": "i"}}, (err,plants)=>{
          if(err){
            res.send(err);
          }
          res.json(plants);
        });
      }else{
        Plant.find({}, null, {sort: 'name'}, (err, plants) => {
          if (err) {
            res.send(err);
           }
           res.json(plants);
         });
      }

     })
     .post('/', (req, res) => {
       console.log("Trying to post from API!!");
    var plant = new Plant();      // create a new instance of the Plant model
    console.log(plant);
    console.log(req.body);
    plant.name = req.body.name || 'n/a';  // set the plants name (comes from the request)
    plant.color = req.body.color || 'n/a';
    plant.type = req.body.type || 'n/a';
    plant.imageurl = req.body.imageurl || 'http://s3.evcdn.com/images/block/I0-001/031/862/186-2.jpeg_/free-garden-talk-fall-vegetable-gardening-86.jpeg';
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
plants.param('plant_id', (req, res, next, value) => {
  console.log("plants param is being called!");
  req.plant_id = value;
  next();
});

//Middleware when a plant is searched for by ID
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
})

plants.delete('/:plant_id', cors(), (req,res) => {
  console.log("API!!! Trying to delete plant with id: " + req.params.plant_id);
      Plant.remove({
        _id: req.params.plant_id
      }, (err, plant) => {
        if (err){
          console.log("There was an error?!?");
          res.send(err);
        }else{
          console.log("DELETING");
          res.json({message: 'Successfully deleted!'});
        }
      });
  });
  plants.put('/:plant_id', cors(), (req, res) =>{
    console.log("Trying to put from API!")
    Plant.findById(req.params.plant_id, (err, plant) => {
      if(err){
        res.send(err);
      }
      console.log(req.body);
      plant.name = req.body.plant.name;
      plant.color = req.body.plant.color;
      plant.type = req.body.plant.type;
      plant.imageurl = req.body.plant.imageurl;
      plant.save(function(err){
        if(err){
          console.log("error in the plant.save function!");
          res.send(err);
        }else{
          console.log("saving the plant from the api successfully!");
          res.json({message: 'Plant updated!'});
        }
      })
      console.log(plant.name + ' ' + plant.color + ' ' + plant.type);
      // res.send(plant);
      // return next(plant);
    });

  })


module.exports = plants;
