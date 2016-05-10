import Article from "../model/articles/article-schema.js";

function findByCategory(category) {
    return new Promise((resolve, reject) => {
        Article.find(
            {categories: category, isDeleted: false},
            null,
            {sort: {publicationDate: -1}},
            (err, articles) => {
                if (err) return reject(err);
                return resolve(articles);
            });
    });
};

export function findByRoute(route, callback) {
    Article.find({route: route, isDeleted: false}, function (err, articles) {
        return callback(err, articles[0])
    })
};

export function getPersonalArticles() {
    return findByCategory("personal");
};

export function getEasybirdArticles() {
    return findByCategory("easybird");
};
