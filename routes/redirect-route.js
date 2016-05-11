var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");

/*GET all the rest - redirect to HomePage */
router.get('/*', function (req, res, next) {
    res.redirect("/" + (locals.findSiteLocals(res).currentLanguage || 'en'));
});

module.exports = router;