// This is routed from /api
const routes = require('express').Router();
const plants = require('./plants');

routes.use('/plants', plants);
routes.get('/', (req, res) => {
  res.status(200).json({message: "You're connected!"})
})

module.exports = routes;
