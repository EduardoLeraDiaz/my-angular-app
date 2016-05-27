'use strict';

module.exports = function (karma) {
  karma.set({

    frameworks: ['jasmine'],

    files: [
      'tests/base.js',
      'tests/**/*Spec.js'
    ],

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' }
      ]
    },
    preprocessors: {
      'tests/base.js': ['webpack'],
      'tests/**/*Spec.js': ['webpack']
    },

    browsers: ['PhantomJS'],

    logLevel: karma.LOG_INFO,

    singleRun: true,
    autoWatch: true,

    colors: true,

    webpack: {
      module: {
        postLoaders: [{ // << add subject as webpack's postloader
          test: /\.js$/,
          include: /src\/.*\/\w*/,
          exclude: /(.*index.*|src\/.*\/config)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    }
  });
};