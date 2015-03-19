"use strict";

// Serves the forget for the application

module.exports = 'controllers/forget';
var dependencies = [
    require('../services/referrer')
];

angular.module(module.exports, dependencies)
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/forget/:referrer', {
                    templateUrl: 'views/forget.html',
                    controller: 'ForgetCtrl'
                })
                .when('/forget', {
                    templateUrl: 'views/forget.html',
                    controller: 'ForgetCtrl'
                });
        }
    ])
    .controller('ForgetCtrl', function ($scope, $http, $routeParams, referrer) {
        if ($routeParams.referrer) {
            referrer.set($routeParams.referrer);
        } else {
            referrer.set();
        }
        $scope.user = {};
        $scope.$watch('user.email', function () {
            $scope.success = false;
            if ($scope.form.email.$error.unknown) {
                $scope.form.email.$setValidity('unknown', true);
                $scope.$broadcast('show-errors-check-validity');
            }
        });
        $scope.submit = function () {
            $scope.success = false;
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.form.$valid) {
                $http
                    .post(
                        config.server + '/forget',
                        {
                            referrer: function () {
                                var data = referrer.get();
                                if (data) {
                                    return data.referrer;
                                }
                            }(),
                            email: $scope.user.email
                        }
                    )
                    .success(function (data) {
                        if (data == 'unknown email') {
                            $scope.form.email.$setValidity('unknown', false);
                            $scope.$broadcast('show-errors-check-validity');
                        } else {
                            $scope.success = true;
                        }
                    });
            }
        };
    });
