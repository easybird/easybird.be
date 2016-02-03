var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");

var mainUrl = "/";
/* GET home page. */

router.get('/', function (req, res) {
    var content = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/homePage.json");

    res.render('pages/homePage', {
        metaData: {
            title: "Easybird.be",
            description: "An innovative company doing software development, aerial filmography, photography and blogging"
        },
        content: content
    });
});

module.exports = router;