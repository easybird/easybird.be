import ReactDOMServer from 'react-dom/server';
import React from 'react';
import BlogOverview from '../frontend-app/blog-app/overview/blog-overview.js';
import { getEasybirdArticles, getPersonalArticles} from '../middleware/facades/article-facade.js';
var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var baseUrl = require("../middleware/helpers/baseUrl");
var _ = require("lodash");
var config = require("../config.json");

const BASE_ROUTE = "/blog";

router.get('/',
    changeCurrentRoute(BASE_ROUTE),
    addDefaultRenderData,
    getEasybirdArticles,
    renderBlog
);

router.get('/personal',
    changeCurrentRoute(BASE_ROUTE + "/personal"),
    addDefaultRenderData,
    getPersonalArticles,
    renderBlog
);

function changeCurrentRoute(route) {
    return function (req, res, next) {
        locals.addSiteLocals(res, {
            currentRoute: route
        });
        next();
    }
}

function addDefaultRenderData(req, res, next) {
    req.renderData = {
        metaData: {
            title: "Blog - Easybird.be",
            description: "The blog of an innovative company doing mainly software development"
        },
        content: getMainContent(res)
    };

    return next();

    function getMainContent(res) {
        var content = require("../data/pages/blog/homePage.json");
        content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");
        return content;
    }
}

function renderBlog(req, res) {
    var initProps = {
        articles: req.articles
    };

    var customRenderData = {
        isBlog: true,
        react: {
            renderedApp: ReactDOMServer.renderToString(
                React.createFactory(BlogOverview)(initProps)),
            initProps: initProps,
            bundle: config.react.htmlDir + config.react.components.blogOverview.bundle
        }
    };

    Object.assign(req.renderData, customRenderData);

    return res.render('pages/blog/homePage', req.renderData);
}

module.exports = router;
