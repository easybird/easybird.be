var Article = require("../model/articles/article-schema.js");
var articlesJson = require("../data/example/articles.json");

var getArticles = function(callback) {
    Article.find({isDeleted: false}, null, { sort: { publicationDate: -1}}, function(err, articles) {
        callback(err, articles)
    });
};

var findByRoute = function(route, callback) {
    Article.find({ route: route, isDeleted: false }, function(err, articles) {
        callback(err, articles[0])
    })
};

module.exports = {
    getArticles: getArticles,
    findByRoute: findByRoute
};