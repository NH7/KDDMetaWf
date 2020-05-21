var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var workflowRouter = require('./routes/workflow');
var processRouter = require('./routes/process');
var metaworkflowRouter = require('./routes/metaworkflow');
var exceptionworkflowRouter = require('./routes/exceptionworkflow');

var app = express();
var listener = app.listen(8888, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});
app.use(cors({origin:'http://localhost:3000'}));
mongoose.connect('mongodb://localhost/nsoorma');
mongoose.Promise = global.Promise;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/workflow', workflowRouter);
app.use('/process', processRouter);
app.use('/metaworkflow', metaworkflowRouter);
app.use('/exceptionworkflow', exceptionworkflowRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
