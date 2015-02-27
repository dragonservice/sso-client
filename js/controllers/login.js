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
        $scope.user = {};
        $scope.$watch('user.email', function () {
            if ($scope.form.email.$error.unknown) {
                $scope.form.email.$setValidity('unknown', true);
                $scope.$broadcast('show-errors-check-validity');
            }
        });
        $scope.$watch('user.password', function () {
            if ($scope.form.password.$error.wrong) {
                $scope.form.password.$setValidity('wrong', true);
                $scope.$broadcast('show-errors-check-validity');
            }
        });
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {

                // if email is unknown
                $scope.form.email.$setValidity('unknown', false);

                // if password is wrong
                $scope.form.password.$setValidity('wrong', false);


                $scope.$broadcast('show-errors-check-validity');
            }
        };
    });
