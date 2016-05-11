var path = require("path");
var _ = require("lodash");

function findSiteLocals(res) {
    if (!res.locals.site) {
        res.locals.site = {}
    }
    return res.locals.site;
}

function addSiteLocals(res, properties) {
    _.assign(findSiteLocals(res), properties);
}

function appendCurrentUrl(res, relativeUrl) {
    let siteLocals = findSiteLocals(res);
    return path.resolve("/", siteLocals.currentLanguage, siteLocals.currentRoute, relativeUrl)
}

module.exports = {
    findSiteLocals: findSiteLocals,
    addSiteLocals: addSiteLocals,
    appendCurrentUrl: appendCurrentUrl
}
