// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlantSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Plant', PlantSchema);
