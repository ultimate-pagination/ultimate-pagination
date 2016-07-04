var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/*-test.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/*-test.ts': ['webpack']
    },
    webpack: {
      resolve: webpackConfig.resolve,
      module: webpackConfig.module
    },
    webpackMiddleware: {noInfo: true},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
