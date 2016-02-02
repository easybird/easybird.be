var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('pages/homePage', {
        metaData: {
            title: "Easybird.be",
            description: "An innovative company doing software development, aerial filmography, photography and blogging"
        }
    });
});

module.exports = router;