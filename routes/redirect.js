var express = require('express');
var router = express.Router();

/*GET all the rest - redirect to HomePage */
router.get('/*', function (req, res, next) {
    res.redirect('/nl');
});

module.exports = router;