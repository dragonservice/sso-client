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
        $scope.user = {};
        $scope.$watch('user.email', function () {
            if ($scope.form.email.$error.alreadyinuse) {
                $scope.form.email.$setValidity('alreadyinuse', true);
                $scope.$broadcast('show-errors-check-validity');
            }
        });
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {

                // if email is already in use
                $scope.form.email.$setValidity('alreadyinuse', false);


                $scope.$broadcast('show-errors-check-validity');
            }
        };
    });
