"use strict";

// Serves the back for the application

module.exports = 'controllers/back';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .controller('BackCtrl', function ($scope, referrer) {
        $scope.data = referrer.get();
    });
