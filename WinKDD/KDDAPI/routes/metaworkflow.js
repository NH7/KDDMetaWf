var express = require('express');
var router = express.Router();
const MetaWorkflows = require('../models/MetaWorkflows');

/* GET all workflow listings */
router.get('/', function(req, res, next) {
  MetaWorkflows.find()
  .exec()
  .then( metaworkflows => {
    console.log('Metaworkflows');
    res.status(200).json(metaworkflows);
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
  MetaWorkflows.create(req.body).then(function(metaworkflow){
    res.send(req.body);
  });
});


module.exports = router;
