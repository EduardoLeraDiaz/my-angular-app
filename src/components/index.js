'use strict';
/**
 * @ngInject
 */
module.exports = require('angular')
  .module('components', [
      require('./core').name,
      require('./post').name
  ]);
