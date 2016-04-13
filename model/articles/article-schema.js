var mongoose = require('mongoose');
var componentSchema = require("../components").componentSchema;
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    route: String,
    title: String,
    subTitle: String,
    date: String,
    topImageUrl: String,
    componentList: [componentSchema],
    creationDate: Date,
    modificationDate: Date,
    publicationDate: Date,
    isDeleted: Boolean
}, {collection: 'articles'});

module.exports = mongoose.model('Article', articleSchema);