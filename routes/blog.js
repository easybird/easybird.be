var express = require('express');
var router = express.Router();
var locals = require("../helpers/locals");
var ArticleService = require("../services/article-service");

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
            doRender(articles);
        }

        function doRender(articles) {
            res.render('pages/blog/homePage', {
                metaData: {
                    title: "Blog - Easybird.be",
                    description: "The blog of an innovative company doing mainly software development"
                },
                content: createArticleListContent(res, articles)
            });

            function createArticleListContent(res, articles) {
                var content = getMainContent(res);
                content.articleList = articles;
                return content;
            }
        }
    };

});

router.get('/:url', function (req, res, next) {
    var route = req.params.url;
    locals.addSiteLocals(res, {
        currentRoute: '/blog/' + route
    });
    ArticleService.findByRoute(route, renderArticle);


    function renderArticle(err, article) {
        if (err || !article) {
            next();
        } else {
            res.render('pages/blog/articlePage', {
                metaData: {
                    title: article.title + " - Blog - Easybird.be",
                    description: createDescription(article)
                },
                content: createArticlePageContent(res, article)
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

    function createArticlePageContent(res, article) {
        var content = getMainContent(res);
        content.article = article;
        return content;
    }
});

function getMainContent(res) {
    var content = require("../data/pages/blog/homePage.json");
    content.footer = require("../data/pages/" + locals.findSiteLocals(res).currentLanguage + "/footer.json");
    return content;
}

module.exports = router;