import ReactDOMServer from 'react-dom/server';
import React from 'react';
import BlogArticle from '../frontend-app/blog-app/article/blog-article.js';
var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var ArticleService = require("../services/article-service");
var baseUrl = require("../middleware/helpers/baseUrl");
var path = require("path");
var _ = require("lodash");
var config = require("../config.json");

router.get('/:url',
    baseUrl,
    function (req, res, next) {
        var route = req.params.url;
        locals.addSiteLocals(res, {
            currentRoute: '/blog/' + route
        });
        ArticleService.findByRoute(route, renderArticle);


        function renderArticle(err, article) {
            if (err || !article) {
                next();
            } else {
                var articleUrl = "/" + locals.findSiteLocals(res).currentLanguage + locals.findSiteLocals(res).currentRoute;

                article.articleUrl = articleUrl;

                var initProps = {
                    article: article
                };
                res.render('pages/blog/articlePage', {
                    metaData: {
                        title: article.title + " - Blog - Easybird.be",
                        description: createDescription(article)
                    },
                    isBlog: true,
                    content: createArticlePageContent(res, article),
                    react: {
                        renderedApp: ReactDOMServer.renderToString(
                            React.createFactory(BlogArticle)(initProps)),
                        initProps: initProps,
                        bundle: config.react.htmlDir + config.react.components.blogArticle.bundle
                    },
                    require: require
                });
            }
        }

        function createDescription(article) {
            if (article.metaData && article.metaData.description) {
                return article.metaData.description;
            } else {
                return article.title + ' - ' + article.subTitle
            }
        }

        function createTwitterUrl(title, subTitle, url) {
            var text = title + " - " + subTitle;
            return "http://twitter.com/share?text=" + encodeURIComponent(text) + "&url=" + url;
        }

        function createLinkedInUrl(title, subTitle, url) {
            var text = title + " - " + subTitle;
            return "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + encodeURIComponent(text) + "&summary=&source=";
        }

        function createFacebookUrl(url) {
            return "https://www.facebook.com/sharer/sharer.php?u=" + url;

        }

        function createGooglePlusUrl(url) {
            return "https://plus.google.com/share?url=" + url
        }

        function createArticlePageContent(res, article) {
            var content = getMainContent(res);
            content.article = article;
            var url = req.baseUrl + req.originalUrl;
            content.share = {
                image: article.topImageUrl ? req.baseUrl + article.topImageUrl : undefined,
                facebook: createFacebookUrl(url),
                twitter: createTwitterUrl(article.title, article.subTitle, url),
                googlePlus: createGooglePlusUrl(url),
                linkedIn: createLinkedInUrl(article.title, article.subTitle, url)
            };
            return content;
        }
    });

function getMainContent(res) {
    var content = require("../data/pages/blog/homePage.json");
    content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");
    return content;
}

module.exports = router;
