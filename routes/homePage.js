import ReactDOMServer from 'react-dom/server';
import React from 'react';
import BlogArticle from '../frontend-app/blog-app/article/blog-article.js';
var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var config = require("../config.json");


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
        react: {
            renderedApp: ReactDOMServer.renderToString(React.createFactory(BlogArticle)({
                test: 'die props krijgt!!'
            })),
            initProps: {
                test: 'die props krijgt!!'
            },
            bundle: config.react.htmlDir + config.react.components.blogArticle.bundle
        },
        content: content
    });
});

module.exports = router;
