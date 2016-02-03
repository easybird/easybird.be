var express = require('express');
var router = express.Router();

router.use('/*', function (req, res, next) {
    var lang = req.acceptsLanguages('nl', 'en') || 'en';
    var url = req.originalUrl;

    var redirectUrl = '/' + lang + url;
    res.redirect(redirectUrl);
});

module.exports = router;