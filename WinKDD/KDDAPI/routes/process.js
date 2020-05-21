var express = require('express');
var router = express.Router();


/* execute Process */
router.get('/', function(req, res, next) {
  //let dataArray = [{name: "John", age: 12},{name: "John2", age: 12}];
  // res.json({
  //   data: dataArray
  // });
  var spawn = require("child_process").spawn;
  var process = spawn('python',["/Users/nsoorma/Documents/WinThImplementation/WinRapidMiner/RMProcess.py"] );

  process.stdout.on('data', function(data) {
    // res.send(data.toString());
    res.json({
      Result: data.toString()
    });
  });

});
module.exports = router;
