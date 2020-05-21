var express = require('express');
var router = express.Router();
const ExceptionWorkflows = require('../models/ExceptionWorkflows');

/* GET all workflow listings */
router.get('/', function(req, res, next) {
  ExceptionWorkflows.find()
  .exec()
  .then( exceptionworkflows => {
    console.log('Metaworkflows');
    res.status(200).json(exceptionworkflows);
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
  ExceptionWorkflows.create(req.body).then(function(exceptionworkflow){
    res.send(req.body);
  });
});


module.exports = router;
