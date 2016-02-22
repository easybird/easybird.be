var db = require('../model/db');
var Article = db.Article;

var getArticles = function(callback) {
    Article.find({}, null, { sort: { publicationDate: -1}}, function(err, articles) {
        callback(err, articles)
    });
};

var findByRoute = function(route, callback) {
    Article.find({ 'route': route }, function(err, articles) {
        callback(err, articles[0])
    })
};

module.exports = {
    getArticles: getArticles,
    findByRoute: findByRoute
};