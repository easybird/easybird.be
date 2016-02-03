var express = require('express');
var router = express.Router();

function getRouter(config) {
    return router.use('/*', function (req, res, next) {
        var lang = req.acceptsLanguages(config.locales) || config.defaultLocale;
        var url = req.originalUrl;

        var redirectUrl = '/' + lang + url;
        res.redirect(redirectUrl);
    });
}

module.exports = function (config) {
    return getRouter(config);
};