// Karma configuration
// Generated on Sun Feb 05 2017 20:51:58 GMT+0300 (FET)
const path = require('path');

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    files: [
//        'node_modules/angular/angular.js',
//        'node_modules/angular-mocks/angular-mocks.js',
//        'client/angular/**/*.js',
//        'client/angular/index.js',
        'test.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'client/angular/**/*.js': ['webpack'],
//      'client/angular/index.js': ['webpack'],
      'test.js': ['webpack']
    },

    webpack: webpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i.e.
        noInfo: true,
        // and use stats to turn off verbose output
        stats: {
          // options i.e. 
          chunks: false
        }
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
    ],
  })
}
