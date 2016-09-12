var staticData = require('./data/config');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var languageDetector = require('./middleware/languageDetector');
var locals = require("./helpers/locals");
var addRoutes = require("./routes/addRoutes");

languageDetector.initialise({
    locales:['en', 'nl']
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.locals.layout = staticData.getConfig().layout;

app.use(function (req, res, next) {
    locals.addSiteLocals(res, {
        url: 'easybird.be'
    });
    next();
});

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

addRoutes(app);

module.exports = app;
