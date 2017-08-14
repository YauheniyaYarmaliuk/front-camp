// Karma configuration
// Generated on Sun Feb 05 2017 20:51:58 GMT+0300 (FET)
const path = require('path');

const webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
        'test.js'
    ],

    exclude: [
    ],

 
    preprocessors: {
      'client/angular/**/*.js': ['webpack'],
      'test.js': ['webpack']
    },

    webpack: webpackConfig,

    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,


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