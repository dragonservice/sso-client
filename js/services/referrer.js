"use strict";

// Service for the redirects after Login/Register or Back

module.exports = 'services/referrer';
var dependencies = [];

angular.module(module.exports, dependencies)
    .factory('referrer', function () {
        var data = {};
        return {
            set: function (referrer) {
                data.referrer = referrer;
                data.back = {
                    name: '',
                    href: ''
                };
                data.success = '';
            },
            get: function () {
                return data;
            },
            success: function (session) {
                if (data) {
                    location.href = data.success.replace('%session%', session);
                }
            }
        };
    });
