module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',//cures phantom issue with TypeError: 'undefined' is not a function
            'target/webapp/dist/vendors.js',
            'target/webapp/dist/app.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/main/webapp/**/*.spec.js',
          ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome','PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-mocha-reporter'
        ],
        reporters: ['junit','mocha'],
        // reporter options
        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            }
        },

        junitReporter: {
            outputDir: 'target/webapp/test', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'karma-unit-testresults.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: false // add browser name to report and classes names
        }

    });
};
