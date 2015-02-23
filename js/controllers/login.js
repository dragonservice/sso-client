"use strict";

// Serves the login for the application

module.exports = 'controllers/login';
var dependencies = [];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                });
        }
    ])
    .controller('LoginCtrl', function ($scope) {
        $scope.form = {};
        $scope.submit = function () {};
    });
