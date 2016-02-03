var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");

router.use('/:language(en|nl)/:url?', function (req, res, next) {
    var language = req.params.language;
    var url = req.params.url || "/";

    locals.addSiteLocals(res, {
        currentUrl: url,
        currentLanguage: language
    });

    //res.send(locals.findSiteLocals(res));

    next();
});

module.exports = router;