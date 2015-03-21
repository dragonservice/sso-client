'use strict';

// AngularJS and translation provider initialization

var dependencies = [
    'ngRoute',
    'pascalprecht.translate',
    'ui.bootstrap.showErrors',

    require('./controllers/login.js'),
    require('./controllers/register.js'),
    require('./controllers/forget.js'),
    require('./controllers/reset.js'),

    require('./controllers/referrer.js'),
    require('./controllers/navigation.js'),
    require('./controllers/imprint.js')
];

angular.module('app', dependencies)
    .config(function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: '/languages/',
            suffix: '.json'
        });
        $translateProvider.registerAvailableLanguageKeys(['de', 'en']);
        $translateProvider.determinePreferredLanguage();
    });
