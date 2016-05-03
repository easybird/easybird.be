var mongoose = require('mongoose');
var componentSchema = require("../components").componentSchema;
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    route: String,
    articleUrl: String,
    title: String,
    subTitle: String,
    date: String,
    metaData: Schema.Types.Mixed,
    topImageUrl: String,
    componentList: [componentSchema],
    content: Schema.Types.Mixed,
    creationDate: Date,
    modificationDate: Date,
    publicationDate: Date,
    isDeleted: {type: Boolean, index: true}
}, {collection: 'articles'});

articleSchema.index({route: 1, isDeleted: 1});

module.exports = mongoose.model('Article', articleSchema);
