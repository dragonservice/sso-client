'use strict';

// Serves the referrer for the application

module.exports = 'controllers/referrer';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .controller('ReferrerCtrl', function ($scope, referrer) {
        $scope.referrer = referrer.get();
    });
