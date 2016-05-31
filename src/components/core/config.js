'use strict';
/**
 * @ngInject
 */
module.exports = {
  'app': {
    url: '',
    abstract: true,
    data: {
      requireAuth: false
    },
    views: {
      'app': {
        controller: 'AppController as appVm'
      }
    }
  },
  'app.home': {
    url: '/home',
    views: {
      'main': {
        templateUrl: './views/core/home.html'
      }
    }
  },
  'app.post': {
    url: '/post',
    abstract: true,
    views: {
      'main': {
        templateUrl: './views/core/posts.html'
      },
      'header': {
        templateUrl: './views/core/header.html',
        controller: 'HeaderController as headerVm'
      }
    }
  }
};