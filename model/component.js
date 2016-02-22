var Schema = require( 'mongoose').Schema;

var componentSchema = {
    componentId: String,
    text: [Schema.Types.Mixed]
};

module.exports = {
    componentSchema: componentSchema
};