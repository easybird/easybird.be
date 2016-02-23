var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");

/* GET home page. */
router.get('/', function (req, res) {
    locals.addSiteLocals(res, {
        currentRoute: '/'
    });
    var content = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/homePage.json");
    content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");

    res.render('pages/homePage', {
        metaData: {
            title: "Easybird.be",
            description: "An innovative company doing software development, aerial filmography, photography and blogging"
        },
        content: content
    });
});

module.exports = router;