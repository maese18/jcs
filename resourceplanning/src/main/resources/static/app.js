'use strict';
// Application bootstrapping
(function() {
    // the code here is executed once in its own scope

angular.module('app', [
        'ngMaterial',
        'ngAnimate',
        'ngSanitize',
        //'angular-loading-bar',
        'ui.router',
        'ngMdIcons',

        //add all modules here
        'common',
        'components',
        'views'

    ])
    //load angular includes (those not required in routes configs).
    .run(function ($templateCache) {
        //$templateCache.put('header.tpl.html', require('./views/header/header.tpl.html'));
        //$templateCache.put('footer.tpl.html', require('./views/footer/footer.tpl.html'));
        //$templateCache.put('sidebar.tpl.html', require('./views/sidebar/sidebar.tpl.html'));
    })

    //Routes overall configuration
    .config(function ($urlRouterProvider, $mdThemingProvider) {

        // For any unmatched url, send to /examplesHome
        $urlRouterProvider.otherwise("/home");

        $mdThemingProvider.theme('default')
            //.primaryPalette('pink', {
            //    'default': '400', // by default use shade 400 from the pink palette for primary intentions
            //    'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            //    'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            //    'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            //})
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            //.accentPalette('purple', {
            //    'default': '200' // use shade 200 for default, and keep all other shades the same
            //});

    });

// application CSS
require("./assets/styles/style.css");

// modules
require('./common/module.js');
require('./components/module.js');
require('./views/module.js');
})();


