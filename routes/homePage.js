var express = require('express');
var router = express.Router();

var mainUrl = "/";
/* GET home page. */
router.get('/:language(en|nl)', function (req, res) {
    var language = req.params.language;
    var content = require("../data/pages/" + language + "/homePage.json");
    res.render('pages/homePage', {
        metaData: {
            title: "Easybird.be",
            description: "An innovative company doing software development, aerial filmography, photography and blogging"
        },
        content: content,
        site: {
            currentUrl: mainUrl,
            currentLanguage: language
        }
    });
});

module.exports = router;