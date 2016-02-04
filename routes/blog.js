var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");

/* GET blog home page. */
router.get('/', function (req, res) {
    var content = require("../data/pages/blog/homePage.json");
    content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");

    res.render('pages/blog/homePage', {
        metaData: {
            title: "Blog - Easybird.be",
            description: "The blog of an innovative company doing mainly software development"
        },
        content: content
    });
});

module.exports = router;