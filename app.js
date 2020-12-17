var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const expressHbs = require("express-handlebars");


var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'hbs');
app.engine("hbs", expressHbs(
  {
      layoutsDir: "../views", 
      defaultLayout: "layout",
      extname: "hbs",
      runtimeOptions:{
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true
      }
  }
))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req,res){
  res.render("index.hbs");
  })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{
    err:err.status
  });
});

module.exports = app;
