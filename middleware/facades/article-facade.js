var path = require("path");
var ArticleService = require("../../services/article-service");
var locals = require("../../helpers/locals");

function enrichArticleList(res) {
    return (articles) => {
        articles.forEach(article => article.articleUrl = locals.appendCurrentUrl(res , article.route));
        return articles;
    };
}

function addArticlesToReq(req, next) {
    return (articles) => {
        req.articles = articles;
        return next();
    }
}

export function getPersonalArticles(req, res, next) {
    return ArticleService.getPersonalArticles()
        .then(enrichArticleList(res))
        .then(addArticlesToReq(req, next));
}

export function getEasyBlogArticles(req, res, next) {
    return ArticleService.getEasyBlogArticles()
        .then(enrichArticleList(res))
        .then(addArticlesToReq(req, next));
}
