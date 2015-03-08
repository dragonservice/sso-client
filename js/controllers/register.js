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
    .controller('RegisterCtrl', function ($scope, $http) {
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
                $http
                    .post(
                        config.server + '/register',
                        {
                            email: $scope.user.email,
                            password: $scope.user.password
                        }
                    )
                    .success(function (data) {
                        if (data == 'email already in use') {
                            $scope.form.email.$setValidity('alreadyinuse', false);
                            $scope.$broadcast('show-errors-check-validity');
                        } else {
                            console.log('success', data);
                        }
                    });
            }
        };
    });
