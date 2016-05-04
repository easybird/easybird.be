import ReactDOMServer from 'react-dom/server';
import React from 'react';
import BlogOverview from '../frontend-app/blog-app/overview/blog-overview.js';
var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var ArticleService = require("../services/article-service");
var baseUrl = require("../middleware/helpers/baseUrl");
var path = require("path");
var _ = require("lodash");
var config = require("../config.json");

/* GET blog home page. */
router.get('/', function (req, res) {
    locals.addSiteLocals(res, {
        currentRoute: '/blog'
    });

    ArticleService.getArticles(renderHomePage);

    function renderHomePage(err, articles) {
        if (err || !articles) {
            // TODO what to do when db down?
            doRender(null)
        } else {
            enrichArticleList(articles, function() {
                doRender(articles);
            });
        }

        function enrichArticleList(articles, callback) {
            _.forEach(articles, function (article) {
                var siteLocals = locals.findSiteLocals(res);
                article.articleUrl = path.resolve("/", siteLocals.currentLanguage, siteLocals.currentRoute, article.route);
            });
            callback();
        }

        function doRender(articles) {
            var initProps = {
                articles: articles
            };
            res.render('pages/blog/homePage', {
                metaData: {
                    title: "Blog - Easybird.be",
                    description: "The blog of an innovative company doing mainly software development"
                },
                isBlog: true,
                content: createArticleListContent(res, articles),
                react: {
                    renderedApp: ReactDOMServer.renderToString(
                        React.createFactory(BlogOverview)(initProps)),
                    initProps: initProps,
                    bundle: config.react.htmlDir + config.react.components.blogOverview.bundle
                },
                require: require
            });

            function createArticleListContent(res, articles) {
                var content = getMainContent(res);
                content.articleList = articles;
                return content;
            }
        }
    };

});

function getMainContent(res) {
    var content = require("../data/pages/blog/homePage.json");
    content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");
    return content;
}

module.exports = router;
