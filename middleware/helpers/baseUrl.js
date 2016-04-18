var url = require("url");

module.exports = function (req, res, next) {
    var protocol = req.protocol;

    req.baseUrl = url.format({
        protocol: protocol,
        host: req.get('host'),
        pathname: ''
    });
    next();
};
