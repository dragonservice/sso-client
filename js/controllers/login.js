"use strict";

// Serves the login for the application

module.exports = 'controllers/login';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/login/:referrer', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                })
                .when('/', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                });
        }
    ])
    .controller('LoginCtrl', function ($scope, $http, $routeParams, $location, referrer) {
        if ($routeParams.referrer) {
            referrer.set($routeParams.referrer);
            $location.path('/');
        }
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
                $http
                    .post(
                        config.server + '/login',
                        {
                            email: $scope.user.email,
                            password: $scope.user.password
                        }
                    )
                    .success(function (data) {
                        switch (data) {
                            case 'unknown email':
                                $scope.form.email.$setValidity('unknown', false);
                                $scope.$broadcast('show-errors-check-validity');
                                break;
                            case 'wrong password':
                                $scope.form.password.$setValidity('wrong', false);
                                $scope.$broadcast('show-errors-check-validity');
                                break;
                            default:
                                referrer.success(data);
                                break;
                        }
                    });
            }
        };
    });
