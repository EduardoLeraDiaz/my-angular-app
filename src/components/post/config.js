'use strict';
/**
 * @ngInject
 */
module.exports = {
    'app.post.list': {
        url: '/list',
        data: {
            requireAuth: true
        },
        views: {
            'content@app.post': {
                templateUrl: './views/post/list-post.html',
                controller: 'ListController as listVm'
            }
        }
    },
    'app.post.create': {
        url: '/create',
        data: {
            requireAuth: true
        },
        views: {
            'content@app.post': {
                templateUrl: './views/post/create-post.html'
            }
        }
    }
};
