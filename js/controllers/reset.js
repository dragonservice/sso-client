"use strict";

// Serves the reset for the application

module.exports = 'controllers/reset';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/reset/:token/:referrer', {
                    templateUrl: 'views/reset.html',
                    controller: 'ResetCtrl'
                })
                .when('/reset/:token', {
                    templateUrl: 'views/reset.html',
                    controller: 'ResetCtrl'
                });
        }
    ])
    .controller('ResetCtrl', function ($scope, $http, $routeParams, referrer) {
        if ($routeParams.referrer) {
            referrer.set($routeParams.referrer);
        }
        $scope.user = {};
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                $http
                    .post(
                        config.server + '/reset',
                        {
                            token: $routeParams.token,
                            password: $scope.user.password
                        }
                    )
                    .success(function (data) {
                        if (data == 'wrong token') {
                            $scope.form.password.$setValidity('token', false);
                            $scope.$broadcast('show-errors-check-validity');
                        } else {
                            referrer.success(data);
                        }
                    });
            }
        };
    });
