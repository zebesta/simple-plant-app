// app/models/plant.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlantSchema   = new Schema({
    name: String,
    color: String,
    type: String
});

module.exports = mongoose.model('Plant', PlantSchema);
