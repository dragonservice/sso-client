"use strict";

// Serves the reset for the application

module.exports = 'controllers/reset';
var dependencies = [];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/reset', {
                    templateUrl: 'views/reset.html',
                    controller: 'ResetCtrl'
                });
        }
    ])
    .controller('ResetCtrl', function ($scope) {
        $scope.form = {};
        $scope.submit = function () {};
    });
