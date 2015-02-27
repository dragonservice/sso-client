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
        $scope.user = {};
        $scope.$watch('user.email', function () {
            if ($scope.form.email.$error.unknown) {
                $scope.form.email.$setValidity('unknown', true);
                $scope.$broadcast('show-errors-check-validity');
            }
        });
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {

                // if email is already in use
                $scope.form.email.$setValidity('unknown', false);


                $scope.$broadcast('show-errors-check-validity');
            }
        };
    });
