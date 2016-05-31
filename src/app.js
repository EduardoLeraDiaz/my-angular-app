'use strict';
/**
 * @ngInject
 */
var appName = 'my-angular-app';
var angular = require('angular');

require('angular-sanitize');
require('angular-ui-bootstrap');
require('angular-ui-router');


var requires = [
  'ngSanitize',
  'ui.bootstrap',
  'ui.router',
  require('./components').name
];

angular.module(appName, requires)
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state;
      $state = $injector.get('$state');
      $state.go('app.home', {}, {'reload': true});
    });
  })

  .run(function ($rootScope, $injector) {
  });


angular.element(document).ready(function () {
  angular.bootstrap(document, [appName]);
});