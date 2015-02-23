"use strict";

// Serves the forget for the application

module.exports = 'controllers/forget';
var dependencies = [];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/forget', {
                    templateUrl: 'views/forget.html',
                    controller: 'ForgetCtrl'
                });
        }
    ])
    .controller('ForgetCtrl', function ($scope) {
        $scope.form = {};
        $scope.submit = function () {};
    });
