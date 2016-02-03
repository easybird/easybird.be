var express = require('express');
var router = express.Router();
var locals = require("../../helpers/locals");

function getRouter(config) {
    return router.use(config.getLanguageRoute() +':url?', function (req, res, next) {
        var language = req.params.language;
        var url = req.params.url || "/";

        locals.addSiteLocals(res, {
            locales: config.locales,
            currentUrl: url,
            currentLanguage: language
        });

        next();
    });
}



module.exports = function(config) {
    return getRouter(config);
};