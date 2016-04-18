var url = require("url");

module.exports = function (req, res, next) {
    //Because of Heroku's automatic https enabled
    var protocol = req.protocol;
    if (process.env.NODE_ENV === "production") protocol = 'https';

    req.baseUrl = url.format({
        protocol: protocol,
        host: req.get('host'),
        pathname: ''
    });
    next();
};
