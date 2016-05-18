var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var jasmineReporters = require('jasmine-reporters');
var junitReporter = new jasmineReporters.JUnitXmlReporter({
    savePath: 'target/webapp/test/e2e',
    consolidateAll: false
});
//jasmine.getEnv().addReporter(junitReporter);
/*
 jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
 'outputdir/', true, true));
 */

exports.config = {
    onPrepare: function () {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(junitReporter);
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/webapp/test/e2e/'
            })
        );
    },
    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
