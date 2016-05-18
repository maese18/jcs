/**
 * Created by tksne on 16.02.2016.
 */
angular.module('common', [])
    //load angular includes (those not required in routes configs).
    .run(function ($templateCache) {
    });

console.log('Module "common" created');
//factories
//require('./factories/pageFactory.js');
require('./factories/pageProvider.js');
require('./directives/shrinkOnScroll.directive.js');
console.log('Module "common" loaded factories and directives');
