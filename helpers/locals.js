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

module.exports = {
    findSiteLocals: findSiteLocals,
    addSiteLocals: addSiteLocals
}