import ReactDOMServer from 'react-dom/server';
import React from 'react';
import BlogOverview from '../frontend-app/blog-app/overview/blog-overview.js';
import { getEasybirdArticles, getPersonalArticles} from '../middleware/facades/article-facade.js';
var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var _ = require("lodash");
var config = require("../config.json");

const BASE_ROUTE = "/blog";

router.get(['/', '/easyblog'],
    changeCurrentBaseRoute(BASE_ROUTE),
    addDefaultRenderData,
    getEasybirdArticles,
    addEasybirdBlogRenderData,
    renderBlogOverview
);

router.get('/personal',
    changeCurrentBaseRoute(BASE_ROUTE),
    addDefaultRenderData,
    getPersonalArticles,
    addPersonalBlogRenderData,
    renderBlogOverview
);

function changeCurrentBaseRoute(route) {
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
        }
    };

    return next();


}

function addEasybirdBlogRenderData(req, res, next) {
    var easyBlogContent = require("../data/pages/blog/homePage.json").easyBlog;
    easyBlogContent.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");

    req.renderData.content = easyBlogContent;

    var personalBlogContent = require("../data/pages/blog/homePage.json").personalBlog;

    req.teaserCardData = {
        cardLink: locals.appendCurrentUrl(res, "personal"),
        photoUrl: "/images/blog/jonathan.png",
        title: personalBlogContent.BANNER_NAME,
        text: personalBlogContent.BANNER_TITLE
    };
    next();
}

function addPersonalBlogRenderData(req, res, next) {
    var personalBlogContent = require("../data/pages/blog/homePage.json").personalBlog;
    personalBlogContent.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");

    req.renderData.content = personalBlogContent;

    var easyBlogContent = require("../data/pages/blog/homePage.json").easyBlog;

    req.teaserCardData = {
        cardLink: locals.appendCurrentUrl(res, "easyblog"),
        photoUrl: "/images/logo/easybird.png",
        title: easyBlogContent.BANNER_NAME,
        text: easyBlogContent.BANNER_TITLE
    };
    next();
}

function renderBlogOverview(req, res) {
    var initProps = {
        articles: req.articles,
        teaserCardData: req.teaserCardData
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
