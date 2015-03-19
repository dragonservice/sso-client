"use strict";

// Service for the redirects after login/register or back

module.exports = 'services/referrer';
var dependencies = [];

angular.module(module.exports, dependencies)
    .factory('referrer', function () {
        var data = {};
        return {
            set: function (referrer) {
                if (referrer && config.referrers[referrer]) {
                    data.referrer = referrer;
                    data.config = config.referrers[referrer];
                } else {
                    delete data.referrer;
                    delete data.config;
                }
            },
            get: function () {
                return data;
            },
            success: function (session) {
                if (data.config && data.config.success) {
                    location.href = data.config.success.replace('%session%', session);
                }
            }
        };
    });
