var express = require('express');
var router = express.Router();
const Workflows = require('../models/Workflows');

/* GET all workflow listings */
router.get('/', function(req, res, next) {
  Workflows.find()
  .exec()
  .then( workflows => {
    console.log('workflows');
    res.status(200).json(workflows);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  })
});



/* CREATE a new workflow */
router.post('/', function(req, res, next){
  console.log('in api',req.body);
  Workflows.create(req.body).
  then(function(workflow){
    res.send(req.body);
  })
  .catch(err => {
    res.status(500).json({
      error: err
    })
  })
});


module.exports = router;
