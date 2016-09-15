const types = require('express').Router();
var Plant     = require('../../app/models/plant');

types.get('/', (req, res) => {
  res.status(200).json({message: "Types!!!!"})
});

//get subset of plants based on type: vegetable, fruit, flower, herb
types.get('/:type_id', (req,res)=>{
  console.log('Plant request sent to get just a specific type of plants: ' +req.params.type_id);
  Plant.find({type: String(req.params.type_id)}, null, {sort: 'name'}, (err,plants)=>{
    if(err){res.send(err);}
    res.json(plants);
  });
});


module.exports = types;
