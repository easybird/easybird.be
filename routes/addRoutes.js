var languageDetector = require('../middleware/languageDetector');
var routes = require('.');
var express = require('express');
const path = require("path");

module.exports = function (app) {

    app.use("/easyblog", express.static(path.join(__dirname, 'node_modules', 'easyblog', 'dist')));
    app.use('/klusbus', routes.klusbus);
    app.use('/immo', routes.immo);
    app.use('/', languageDetector.getParser());
    app.use(languageDetector.config.getLanguageRoute(), routes.homePage);
    app.use(languageDetector.config.getLanguageRoute('/blog'), routes.blogOverview);
    app.use(languageDetector.config.getLanguageRoute('/blog'), routes.blogArticle);
    app.use(languageDetector.config.getLanguageRoute('/:url?'), routes.redirect);
    app.use('/*', languageDetector.getFinder());

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers
// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {

        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
};