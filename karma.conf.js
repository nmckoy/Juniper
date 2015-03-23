'use strict';

/**
 * Module dependencies.
 */
var
  _ = require('lodash'),
	appAssets = [
	  '/app/assets/javascripts/ng-app/*.js',
	  '/app/assets/javascripts/ng-app/modules/**/*js',
	  '/app/assets/javascripts/ng-app/modules/**/**/*js'],
	tests = [
	  '/app/assets/javascripts/ng-app/modules/**/tests/*js'
	  ];

// Karma configuration
module.exports = function(karmaConfig) {
	karmaConfig.set({
		// Frameworks to use
		frameworks: ['mocha'],

		// List of files / patterns to load in the browser
		files: _.union(appAssets, tests, defaultAssets.client.js),

		// Test results reporter to use
		// Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
		//reporters: ['progress'],
		reporters: ['mocha'],

		plugins: [
			'karma-mocha',
			'karma-mocha-reporter',
			'karma-phantomjs-launcher'
		],

		// Web server port
		port: 9876,

		// Enable / disable colors in the output (reporters and logs)
		colors: true,

		// Level of logging
		// Possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
		logLevel: karmaConfig.LOG_INFO,

		// Enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,

		// Continuous Integration mode
		// If true, it capture browsers, run tests and exit
		singleRun: true
	});
};