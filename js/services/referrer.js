"use strict";

// Service for the redirects after Login/Register or Back

module.exports = 'services/referrer';
var dependencies = [];

angular.module(module.exports, dependencies)
    .factory('referrer', function () {
        var data = {};
        return {
            set: function (referrer) {
                if (config.referrers[referrer]) {
                    data.referrer = referrer;
                    data.config = config.referrers[referrer];
                }
            },
            get: function () {
                return data;
            },
            success: function (session) {
                if (data) {
                    location.href = data.config.success.replace('%session%', session);
                }
            }
        };
    });
