'use strict';
/**
 * @ngInject
 */
var ModuleName = 'core',
  RoutingConfig = require('./config');
module.exports = angular.module(ModuleName, [])
  .controller('AppController', require('./controller/AppController'))
  .config(function ($stateProvider) {
    angular.forEach(RoutingConfig, function (config, name) {
      $stateProvider.state(name, config);
    });
  });
