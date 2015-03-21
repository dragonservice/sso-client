'use strict';

/**
 * Serves the config for the application
 * @example
    config: {
        route: '/js/config.js',
        config: function () {
            var pkg = require(__dirname + '/package.json');
            var referrers = {};
            if (process.env.REFERRERS) {
                referrers = JSON.parse(process.env.REFERRERS);
            }
            return {
                name: pkg.name,
                version: pkg.version,
                homepage: pkg.homepage,
                server: process.env.SERVER,
                referrers: referrers
            };
        }()
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    var js = 'var config = ' + JSON.stringify(config.config) + ';';
    app.get(config.route, function (req, res) {
        res.send(js);
    });
};
