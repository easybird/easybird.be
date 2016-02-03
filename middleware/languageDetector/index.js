var parser;
var finder;
var config = {
    isConfigured: false,
    locales: ['en'],
    defaultLocale: 'en',
    getLanguageRoute: function() {
        var language = "";
        config.locales.forEach(function(locale) {
            language = language + locale + '|'
        });
        language = language.substring(0, language.length-1);
        return '/:language(' + language + ')';
    }
};

function configure(opt) {
    if (config.isConfigured) {
        console.warn("Why are you configuring twice?")
    }

    if (Array.isArray(opt.locales)) {
        config.defaultLocale = opt.locales[0];
        config.locales = [];
        opt.locales.forEach(function (l) {
            config.locales.push(l);
        });
    }

    config.isConfigured = true;

}

function initialiseFinder() {
    finder = require('./languageFinder')(config);
}

function initialiseParser() {
    parser = require('./languageParser')(config);
}

module.exports = {
    initialise : function initialise(opt) {
        configure(opt);
        initialiseFinder();
        initialiseParser();
    },
    getParser: function getParser() {
        if (!config.isConfigured) {
            console.warn('You did not yet configure the detector. The defaults are used');
            initialiseParser();
        }
        return parser;
    },
    getFinder: function getFinder() {
        if (!config.isConfigured) {
            console.warn('You did not yet configure the detector. The defaults are used');
            initialiseFinder();
        }
        return finder;
    },
    config: config
};