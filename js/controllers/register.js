"use strict";

// Serves the register for the application

module.exports = 'controllers/register';
var dependencies = [];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl'
                });
        }
    ])
    .controller('RegisterCtrl', function ($scope) {
        $scope.form = {};
        $scope.submit = function () {};
    });
