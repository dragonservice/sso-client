"use strict";

// Serves the register for the application

module.exports = 'controllers/register';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/register/:referrer', {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl'
                })
                .when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegisterCtrl'
                });
        }
    ])
    .controller('RegisterCtrl', function ($scope, $http, $routeParams, referrer) {
        if ($routeParams.referrer) {
            referrer.set($routeParams.referrer);
        } else {
            referrer.set();
        }
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
                            referrer.success(data);
                        }
                    });
            }
        };
    });
