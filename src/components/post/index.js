'use strict';
/**
 * @ngInject
 */
var ModuleName = 'post',
    RoutingConfig = require('./config');

module.exports = angular.module(ModuleName, [])
    .controller('HeaderController', require('./controller/HeaderController'))
    .controller('ListController', require('./controller/ListController'))
    .config(function ($stateProvider) {
        angular.forEach(RoutingConfig, function (config, name) {
            $stateProvider.state(name, config);
        });
    });